package com.potentia.scholarship.service;

import com.potentia.scholarship.entity.TestResult;
import com.potentia.scholarship.repository.TestResultRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TestResultService {
    
    @Autowired
    private TestResultRepository testResultRepository;
    
    /**
     * Save a test result
     */
    public TestResult saveTestResult(TestResult testResult) {
        return testResultRepository.save(testResult);
    }
    
    /**
     * Get a test result by ID
     */
    public Optional<TestResult> getTestResultById(Long id) {
        return testResultRepository.findById(id);
    }
    
    /**
     * Get all test results
     */
    public List<TestResult> getAllTestResults() {
        return testResultRepository.findAll();
    }
    
    /**
     * Get test results by email
     */
    public List<TestResult> getTestResultsByEmail(String email) {
        return testResultRepository.findByEmailIgnoreCase(email);
    }
    
    /**
     * Get test results by phone
     */
    public List<TestResult> getTestResultsByPhone(String phone) {
        return testResultRepository.findByPhoneIgnoreCase(phone);
    }
    
    /**
     * Get test results by test type
     */
    public List<TestResult> getTestResultsByTestType(String testType) {
        return testResultRepository.findByTestType(testType);
    }
    
    /**
     * Get test results by email and test type
     */
    public List<TestResult> getTestResultsByEmailAndTestType(String email, String testType) {
        return testResultRepository.findByEmailAndTestType(email, testType);
    }
    
    /**
     * Delete a test result by ID
     */
    public void deleteTestResultById(Long id) {
        testResultRepository.deleteById(id);
    }
    
    /**
     * Update a test result
     */
    public TestResult updateTestResult(Long id, TestResult testResultDetails) {
        Optional<TestResult> testResult = testResultRepository.findById(id);
        
        if (testResult.isPresent()) {
            TestResult existingResult = testResult.get();
            existingResult.setFullName(testResultDetails.getFullName());
            existingResult.setEmail(testResultDetails.getEmail());
            existingResult.setPhone(testResultDetails.getPhone());
            existingResult.setSchool(testResultDetails.getSchool());
            existingResult.setTestType(testResultDetails.getTestType());
            existingResult.setCorrectAnswers(testResultDetails.getCorrectAnswers());
            existingResult.setWrongAnswers(testResultDetails.getWrongAnswers());
            existingResult.setUnattempted(testResultDetails.getUnattempted());
            existingResult.setTotalMarks(testResultDetails.getTotalMarks());
            existingResult.setDuration(testResultDetails.getDuration());
            
            return testResultRepository.save(existingResult);
        }
        
        return null;
    }
    
    /**
     * Calculate performance metrics
     */
    public double getAccuracyPercentage(TestResult testResult) {
        if (testResult.getTotalQuestions() == 0) {
            return 0;
        }
        return (testResult.getCorrectAnswers() * 100.0) / testResult.getTotalQuestions();
    }
    
    /**
     * Get average marks for a test type
     */
    public double getAverageMarksForTestType(String testType) {
        List<TestResult> results = testResultRepository.findByTestType(testType);
        if (results.isEmpty()) {
            return 0;
        }
        
        double totalMarks = results.stream()
                .mapToInt(TestResult::getTotalMarks)
                .sum();
        
        return totalMarks / results.size();
    }
}
