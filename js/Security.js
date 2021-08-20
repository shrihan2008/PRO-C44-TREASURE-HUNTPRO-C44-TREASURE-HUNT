class Security {

    constructor(){

        // Add code to create the input and button elements
        this.acces1=createInput("")
        this.acces1.position(100,90)
        this.acces1.style('background','grey')

        this.button1=createButton("Check")
        this.button1.position(100,120)
        this.button1.style('background','grey')

        this.acces2=createInput("")
        this.acces2.position(100,300)
        this.acces2.style('background','grey')

        this.button2=createButton("Check")
        this.button2.position(100,340)
        this.button2.style('background','grey')


        this.acces3=createInput("")
        this.acces3.position(700,200)
        this.acces3.style('background','grey')

        this.button3=createButton("Check")
        this.button3.position(700,240)
        this.button3.style('background','grey')

    }

    display(){
        
    }
        // Add code to make the buttons function as expected
        check1(){
           
            this.button1.mousePressed(()=>{
                if(system.authenticate(accessCode1,this.acces1.value())){
                    this.button1.hide()
                    this.acces1.hide()
                    
                    score++
                }
            }) 
        }

            check2()
            {
              
                this.button2.mousePressed(()=>{
                    if(system.authenticate(accessCode2,this.acces2.value())){
                        this.button2.hide()
                        this.acces2.hide()
                        score++
                      
                    }
                }) 
            }

            
            check3()
            {
               
                this.button3.mousePressed(()=>{
                    if(system.authenticate(accessCode3,this.acces3.value())){
                        this.button3.hide()
                        this.acces3.hide()
                        score++
                        
                    }
                }) 
            }
    


    

}