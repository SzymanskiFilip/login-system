package eu.filip.backend.controller;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.text.SimpleDateFormat;
import java.util.Date;

@RestController
@CrossOrigin("*")
public class Controller {

    @GetMapping("/ping")
    public String ping(){
        return "PING - SERVER ACTIVE";
    }

    @GetMapping("/data")
    public String data(){
        return "YOU'RE LOGGED IN!";
    }
}
