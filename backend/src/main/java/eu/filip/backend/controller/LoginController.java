package eu.filip.backend.controller;

import eu.filip.backend.utils.LoginCredentials;
import org.springframework.web.bind.annotation.*;

@RestController
public class LoginController {

    @PostMapping("/login")
    public void login(@RequestBody LoginCredentials loginCredentials){
        //no need actually
    }

    @GetMapping("/user")
    public String user(){
        return "USER RESOURCE";
    }

    @GetMapping("/admin")
    public String admin(){
        return "ADMIN RESOURCE";
    }


}
