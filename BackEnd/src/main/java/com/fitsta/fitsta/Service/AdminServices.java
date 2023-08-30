package com.fitsta.fitsta.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fitsta.fitsta.Entity.Admin;
import com.fitsta.fitsta.Repository.AdminRepository;

@Service
public class AdminServices {
    
    @Autowired
    private AdminRepository adminRepository;

    public String[] adminLogin(String username, String pass){
        List<Admin> admin = this.adminRepository.findByUsernameAndPassword(username, pass);
        if (admin != null && !admin.isEmpty()){
            String[] data = new String[3];
            data[0]=""+admin.get(0).getId();
            data[1]="admin";
            data[2]="Success";
            return data;
        }else{
            String[] data = new String[3];
            data[0]="";
            data[1]="";
            data[1]="failed";
            return data;
        }
    }


}
