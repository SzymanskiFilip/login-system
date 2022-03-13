package eu.filip.backend.controller;

import eu.filip.backend.utils.LoginCredentials;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {

    @CrossOrigin(origins = "*")
    @PostMapping("/login")
    public void login(@RequestBody LoginCredentials loginCredentials){
        //no need actually
    }


}
