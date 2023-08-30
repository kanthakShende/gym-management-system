package com.fitsta.fitsta.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fitsta.fitsta.Entity.Orders;
import com.fitsta.fitsta.Entity.Product;
import com.fitsta.fitsta.Repository.OrderRepository;
import com.fitsta.fitsta.Repository.ProductRepository;

@Service
public class ProductServices {
    
    @Autowired
    private ProductRepository productRepository;
    
    @Autowired
    private OrderRepository orderRepository;

    public String createProduct(Product newProduct){
        try {
            this.productRepository.save(newProduct);
            return "Success";
        } catch (Exception e) {
            return e.getMessage();
        }
    }


    public Product getProduct(Integer id){
        Optional<Product> gotProduct =  this.productRepository.findById(id);
        if (gotProduct.isPresent()){
            return gotProduct.get();
        }else{
            return null;
        }
    }


    public String deleteProduct(Integer id){
        Optional<Product> product = productRepository.findById(id);
        if(product.isPresent()){
            List<Orders> orders = product.get().getOrders();
            for (Orders order : orders) {
                orderRepository.delete(order);
            }
            productRepository.delete(product.get());
            return ("Success");
        }else{
            return ("Product Not Found!");
        }
    }


    public List<Product> listProducts(){
        try {

            List<Product> productsList = (List<Product>) this.productRepository.findAll();
            if(productsList.isEmpty()){
                return null;
            }else{
                return productsList;
            }
        }
        catch (Exception e) {return null;}
    }


}
