package com.potentia.scholarship.repository;

import com.potentia.scholarship.entity.Registration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RegistrationRepository extends JpaRepository<Registration, Long> {
    Registration findByEmail(String email);
    
    Registration findByPhone(String phone);
}
