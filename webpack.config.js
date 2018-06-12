const path = require("path");

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "src/js", "index.js"), // Our frontend will be inside the src folder
  output: {
    path: path.join(__dirname, "dist"),
    filename: "build.js" // The final file will be created in dist/build.js
  },
  module: 
  {
    rules: [
      { 
        test: /\.css$/, // To load the css in react
        use: ["style-loader", "css-loader"],
        include: /src/
      }, 
      { 
	      test: /\.jsx?$/, // To load the js and jsx files
        loader: "babel-loader",
        exclude: /node_modules/,
        query: 
        {
          presets: ["babel-preset-env", "babel-preset-react", "babel-preset-flow"].map(require.resolve)
        }
      }/*, 
      {
        test: /\.json$/, // To load the json files
        loader: "json-loader"
      }*/
    ]}
}









