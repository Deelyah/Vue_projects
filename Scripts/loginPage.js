Vue.component("Login", {
    template: `
    <div id="Container">
        <div id="Contents">

            <section>
                <div id="imgContainer">
                    <div id="innerContainer">
                        <img id="profile" src="Images/avatar.png" alt="display picture">
                    </div>
                </div>
            </section>

            <form action="" method="" @submit.prevent='validation' >
                
                <label for="name">Name</label>
                <input type="text" v-model="Name" placeholder="Enter your name" id="name">
                <p id="NameError"></p>

                <label for="e-mail">E-mail</label>
                <input type="email" v-model="Email" id="e-mail" placeholder="myschool@gmail.com">
                <p id="Name-error"></p>

                <label for="hobby">Hobbies</label>
                <ul v-for="(loop, index) of HobbyList">{{index += 1}} {{loop}}</ul>
                <input type="text" v-model="Hobbies" id="hobby">
                <button @click="newHobby" id="newHobby" >Add more hobbies</button>

                <label for="phone">Phone</label>
                <input type="number" id="Phone" v-model="Phone">
                <p id="phoneError"></p>

                <label for="psw">Password</label>
                <input type="password" id="pswd" v-model="Password">
                <p id="passwordError"></p>
                

                <input type="submit" id="submit">
            </form>
        </div>
    </div>`,
    data(){
        return{
            Name: "",
            Email: "",
            Hobbies: "",
            Phone: "",
            HobbyList: [],
            Password: "",
            NameError: "",
        }
    },
    methods:{
        
            newHobby(){
                this.HobbyList.push(this.Hobbies);
                this.Hobbies = "";
            },
           
            validation(){
                var phoneRegExp = /^0/;
                var phoneResult = phoneRegExp.test(this.Phone);
                if(this.Name == ""){
                    document.getElementById("name").focus()
                    document.getElementById("name").style.outline="1px solid red";
                    document.getElementById("NameError").innerHTML = "This field is required";
                    setTimeout(()=>{
                        document.getElementById("NameError").innerHTML = ""
                        document.getElementById("name").style.outline = "none"
                    }, 3000)
                    return false
                    
                }
                else if(this.Phone.length != 11 || phoneResult == false){
                    document.getElementById("Phone").focus()
                    document.getElementById("phoneError").innerHTML = `phone must be 11 digits <br> phone must start with zero `
                    document.getElementById("Phone").style.outline="1px solid red";
                    setTimeout(()=>{
                        document.getElementById("Phone").style.outline = "none";
                        document.getElementById("phoneError").innerHTML = "";
                    }, 3000)
                    return false
                     
                }else if(this.Password.length < 8){
                    document.getElementById("pswd").focus()
                    document.getElementById("pswd").style.outline = "1px solid red";
                    document.getElementById("passwordError").innerHTML = "Password must be up to 8 characters";
                    setTimeout(()=>{
                        document.getElementById("pswd").style.outline = "none";
                        document.getElementById("passwordError").innerHTML = "";
                    }, 3000)
                    return false

                }else{  
                    return true
                }
        
            }
        
        
    }
})

var newApp = new Vue({
    el: "#Start",
    data(){
        return{

        }
    },
})