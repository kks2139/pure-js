const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode : 'none', // 모드설정 : 개발용 or 프로덕션. none == 개발, 프덕 중 아무것도아님
    entry : { // 서로 연결되있는 여러 모듈들의 처음 시작점이되는 파일을 알려줌
        bundle : './src/index.js',
    }, 
    output : { // 여러개의 모듈들을 하나로 묶어서 만든 결과물 파일에 대한 설정
        publicPath: '/', 
        filename : '[name].js', // name : entry 에서 사용한 키값 (main)
        path : path.resolve(__dirname + '/build') // 폴더명 (node 의 path 모듈 사용, __dirname : 절대경로)
    },
    devServer : { // webpack-dev-server 의 설정들. 번들링된 파일들을 서버에서 실행하게 해주고 수정시 자동 반영됨
        static : path.resolve(__dirname + '/build'), // contentBase --> static 으로 바뀜..
        port : 5000
    },
    resolve : { // import ... from 파일명.js 처럼 import 시에 파일 확장자(.js)를 안붙여도 인식할 수 있게 해준다.
        // extensions : ['js']
    },
    module : {
        rules : [
            {
                test: /\.css$/,
                // use 에 사용할 로더를 명시해준다. 오른쪽에서부터 적용된다.
                use: ['style-loader', 'css-loader'] // css-loader 가 css를 파싱할 수 있게 해주고 style-loader가 브라우져에서 css를 적용하게해준다.
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
                exclude: /node_modules/
            },
        ]
    },
    devtool: 'cheap-module-source-map', // 압축된 번들파일을 개발자도구에서 원본 소스로 보여주는 기능. 디버깅이 가능해진다.. (웹팩 소스맵 구글링 ㄱㄱ)
    plugins: [
        new HtmlWebPackPlugin({ // html 번들링은 모듈이 아닌 플러그인을 사용. build 하고나면 build된 폴더에 index.html 이 생긴다
            template : './index.html'
        }),
        new CleanWebpackPlugin() // 전에 빌드했을때 남아있는 파일들을 알아서 지워준다.
    ]
}