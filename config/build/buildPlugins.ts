import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from 'webpack';
import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';

export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({template: paths.html}),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin(
          {
            filename: path.join('css', "[name].css"),
            chunkFilename: path.join('css', "[name].css")
          }
        )
      ]
}