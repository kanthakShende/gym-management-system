package com.fitsta.fitsta.Controller;

import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fitsta.fitsta.Entity.Logins;
import com.fitsta.fitsta.Repository.LoginsRepository;
import com.fitsta.fitsta.Service.AdminServices;
import com.fitsta.fitsta.Service.TrainerServices;
import com.fitsta.fitsta.Service.UserServices;

@RestController
@RequestMapping("/api")
public class AdminController {

    @Autowired
    private AdminServices adminServices;

    @Autowired
    private TrainerServices trainerServices;

    @Autowired
    private UserServices userServices;

    @Autowired
    private LoginsRepository loginsRepository;

    
    private static final String CHARS="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    public static String generateToken(int length) {
        Random random = new Random();
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < length; i++) {
            sb.append(CHARS.charAt(random.nextInt(CHARS.length())));
        }
        return sb.toString();
    }

    @PostMapping(value="/login")
    public ResponseEntity<String> Login(@RequestParam("username") String username, @RequestParam("password") String password) {
        String[] result;

        result = this.adminServices.adminLogin(username, password);
        if(!result[0].equals("")){
            String token = generateToken(16);
            this.loginsRepository.save(new Logins(0, result[1], null, token));
            return ResponseEntity.ok().body("{\"message\" : \"success\",\"token\" : \""+ token +"\",\"type\" : \""+result[1]+"\",\"id\" : "+result[0]+"}");
        }

        result = this.trainerServices.login(username, password);
        if(!result[0].equals("")){
            String token = generateToken(16);
            this.loginsRepository.save(new Logins(0, result[1], null, token));
            return ResponseEntity.ok().body("{\"message\" : \"success\",\"token\" : \""+ token +"\",\"type\" : \""+result[1]+"\",\"id\" : "+result[0]+"}");
        }

        result = this.userServices.login(username, password);
        if(!result[0].equals("")){
            String token = generateToken(16);
            this.loginsRepository.save(new Logins(0, result[1], null, token));
            return ResponseEntity.ok().body("{\"message\" : \"success\",\"token\" : \""+ token +"\",\"type\" : \""+result[1]+"\",\"id\" : "+result[0]+"}");
        }

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("{\"message\":\"Invalid Credentials\"");
    }


    @PostMapping("/logout")
    public ResponseEntity<String> Logout(@RequestParam("token") String token){
        try{
            List<Logins> foundLogin = this.loginsRepository.findAllByToken(token);
            if(!foundLogin.isEmpty()){
                this.loginsRepository.deleteById(foundLogin.get(0).getId());
                return ResponseEntity.status(HttpStatus.OK).body("{\"message\":\"Logout Successful\"}");
            }else{
                return ResponseEntity.status(HttpStatus.OK).body("{\"message\":\"Falied to Logout!\"}");
            }
        } catch (Exception e) {
            System.out.println("Logout Error : "+e);
            return ResponseEntity.status(HttpStatus.OK).body("{\"message\":\"Falied to Logout!\"}");
        }
    }

}
