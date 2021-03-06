package eu.filip.backend.controller;

import eu.filip.backend.utils.LoginCredentials;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@RestController
public class LoginController {

    @PostMapping("/login")
    public void login(@RequestBody LoginCredentials loginCredentials){
        //no need actually
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logout(HttpServletRequest request){
        try {
            request.logout();
        } catch (ServletException e) {
            e.printStackTrace();
        }
        return ResponseEntity.accepted().build();
    }

    @GetMapping("/user")
    public String user(){
        return "USER RESOURCE";
    }

    @GetMapping("/admin")
    public String admin(){
        return "ADMIN RESOURCE";
    }

    @PostMapping("/check")
    public boolean check(){
        return false;
    }

}
