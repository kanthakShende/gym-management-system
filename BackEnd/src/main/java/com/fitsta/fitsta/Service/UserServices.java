package com.fitsta.fitsta.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fitsta.fitsta.Entity.Orders;
import com.fitsta.fitsta.Entity.Task;
import com.fitsta.fitsta.Entity.User;
import com.fitsta.fitsta.Repository.OrderRepository;
import com.fitsta.fitsta.Repository.PlansPurchaseRepository;
import com.fitsta.fitsta.Repository.TaskRepository;
import com.fitsta.fitsta.Repository.UserRepository;

@Service
public class UserServices {
    
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TaskRepository taskRepository;

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private PlansPurchaseRepository plansPurchaseRepository;

    public String[] login(String username, String pass) {
        List<User> user = this.userRepository.findByUsernameAndPassword(username, pass);
        String[] data = new String[3];
        if (user != null && !user.isEmpty()) {
            data[0]=""+user.get(0).getId();
            data[1]="user";
            data[2]="Success";
            return data;
        } else {
            data[0]="";
            data[1]="";
            data[1]="failed";
            return data;
        }
    }


    public String createUser(User newUser){
        try {
            return this.userRepository.save(newUser).getId()+"";
        } catch (Exception e) {
            System.out.println("Error while creating user : "+e.getMessage());
            return "Error";
        }
    }


    public User getUser(Integer id){
        Optional<User> gotUser =  this.userRepository.findById(id);
        if (gotUser.isPresent()){
            return gotUser.get();
        }else{
            return null;
        }
    }


    public String deleteUser(Integer id){
        Optional<User> user = userRepository.findById(id);
        if(user.isPresent()){
            
            if(user.get().getUserPlansPurchase() != null){
                plansPurchaseRepository.delete(user.get().getUserPlansPurchase());
            }
            
            List<Task> tasks = user.get().getTasks();
            if(!tasks.isEmpty()){
                for (Task task : tasks) {
                    this.taskRepository.delete(task);
                }
            }

            List<Orders> orders = user.get().getOrders();
            if(!orders.isEmpty()){
                for (Orders eachOrder : orders) {
                    this.orderRepository.delete(eachOrder);
                }
            }

            userRepository.delete(user.get());
            return ("Success");
        }else{
            return ("User Not Found!");
        }
    }


    public List<User> listUsers(){
        try {
            List<User> allUsers = (List<User>) this.userRepository.findAll();
            return allUsers;
        }
        catch (Exception e) {return null;}
    }




}
