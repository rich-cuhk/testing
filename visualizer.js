function main(){
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;



    class Bar{
        constructor(x, y, width, height, color) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.color = width;

        }
        update(micInput){
            this.height=micInput;

        }

        draw(context){
            context.fillStyle = this.color;
            context.fillRect(this.x, this.y, this.width, this.height);

        }
    }

    function animate(){
        ctx.clearRect(0,0,canvas.width, canvas.height);
        requestAnimationFrame(animate)
    }

    animate();


}

