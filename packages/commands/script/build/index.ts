import delPath from "../utils/delpath";
import { series, src, dest, parallel } from "gulp";
import less from 'gulp-less';
import autoprefixer from 'gulp-autoprefixer';
import { pkgPath, componentPath  } from "../utils/path";
import run from '../utils/run';
//删除easyest

export const removeDist = () => {
  return delPath(`${pkgPath}/y-command`);
};

//打包样式
export const buildStyle = () => {
  return src(`${componentPath}/src/**/style/**.less`)
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(dest(`${pkgPath}/y-command/lib/src`))
    .pipe(dest(`${pkgPath}/y-command/es/src`));
};

//打包组件
export const buildComponent = async () => {
  run("pnpm run build", componentPath);
};

export default series(
  async () => removeDist(),
  parallel(
    async () => buildStyle(),
    async () => buildComponent()
  )
)