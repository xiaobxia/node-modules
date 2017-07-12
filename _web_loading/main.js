/**
 * Created by xiaobxia on 2017/7/11.
 */
var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
var width = canvas.width = 350;
var height = canvas.height = 350;
ctx.translate(width / 2, height / 2);
(function loop() {
    requestAnimationFrame(loop);
    ctx.clearRect( -width / 2, -height / 2, width, height );
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc( M.cos( angle ) * radius, M.sin( angle ) * radius, size, 0, TWOPI, false );
    ctx.fillStyle = '#000';
    ctx.fill();
    tick++;
})();
document.body.appendChild(canvas);