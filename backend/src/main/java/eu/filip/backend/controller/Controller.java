package eu.filip.backend.controller;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
public class Controller {
    @GetMapping("/hello")
    public String hello(){
        return "hello";
    }

    @GetMapping("/test")
    public String test(){
        return "TEST";
    }


}
