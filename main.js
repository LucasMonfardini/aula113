function preload()
{

}

function setup()
{
canvas = createCanvas(500,420);
canvas.position(710, 280);
video = createCapture(VIDEO);
video.hide();

tintColor = "";
}

function draw()
{
image(video, 0, 0, 500, 420);
tint(tintColor);
}

function filterTint()
{
    tintColor = document.getElementById("colorName").value;
}

function takeSnapshot()
{
    save('studentName.png');
}