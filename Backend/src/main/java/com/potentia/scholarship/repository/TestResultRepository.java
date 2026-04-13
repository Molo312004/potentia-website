package com.potentia.scholarship.repository;

import com.potentia.scholarship.entity.TestResult;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TestResultRepository extends JpaRepository<TestResult, Long> {
    List<TestResult> findByEmailIgnoreCase(String email);
    
    List<TestResult> findByPhoneIgnoreCase(String phone);
    
    List<TestResult> findByTestType(String testType);
    
    List<TestResult> findByEmailAndTestType(String email, String testType);
}
