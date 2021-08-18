class Security {

    constructor(){

        // Add code to create the input and button elements
        this.acces1=createInput("Variable")
        this.acces1.position(100,90)
        this.acces1.style('background','grey')

        this.button1=createButton("Check")
        this.button1.position(100,120)
        this.button1.style('background','grey')

    }

    display(){
        
    }
        
        // Add code to make the buttons function as expected
        check(){
            this.button1.mousePressed(()=>{
                if(system.authenticate(accessCode1,this.acces1.value())){
                    this.button1.hide()
                    this.acces1.hide()
                    score++
                }
            }) 

    


    
}
}