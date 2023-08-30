package com.fitsta.fitsta.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fitsta.fitsta.Entity.Plans;
import com.fitsta.fitsta.Entity.PlansPurchase;
import com.fitsta.fitsta.Repository.PlansPurchaseRepository;
import com.fitsta.fitsta.Repository.PlansRepository;
import com.fitsta.fitsta.Repository.TrainerRepository;

@Service
public class PlansServices {
    
    @Autowired
    private PlansRepository plansRepository;

    @Autowired
    private TrainerRepository trainerRepository;

    @Autowired
    private PlansPurchaseRepository plansPurchaseRepository;


    public String createPlan(Plans newPlan){
        try {
            this.plansRepository.save(newPlan);
            return "Success";
        } catch (Exception e) {
            return e.getMessage();
        }
    }


    public Plans getPlan(Integer id){
        Optional<Plans> gotPlans =  this.plansRepository.findById(id);
        if (gotPlans.isPresent()){
            return gotPlans.get();
        }else{
            return null;
        }
    }


    public String deletePlans(Integer id) {

        Optional<Plans> foundPlan = this.plansRepository.findById(id);
    
        if (foundPlan.isPresent()) {
            List<PlansPurchase> allPurchases = foundPlan.get().getPlansPurchasedplans();
    
            for (PlansPurchase eachPlansPurchase : allPurchases) {
                eachPlansPurchase.setEnrolledplan(null); // Remove the reference to the plan
                this.plansPurchaseRepository.delete(eachPlansPurchase);
            }
    
            plansRepository.delete(foundPlan.get());
            return ("Success");
        } else {
            return ("Plan Not Found!");
        }
    }
    



    public List<Plans> listPlans(){
        try {
            return (List<Plans>) this.plansRepository.findAll();
        }
        catch (Exception e) {return null;}
    }


}
