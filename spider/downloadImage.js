/**
 * Created by xiaobxia on 2017/7/11.
 */
function downloadImage(imgUrl, dir, filename) {
  let path = dir + filename;
  request(imgUrl).pipe(fs.createWriteStream(path));
  console.log('成功保存图片,文件名:' + filename);
}
