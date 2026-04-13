package com.potentia.scholarship.controller;

import com.potentia.scholarship.entity.TestResult;
import com.potentia.scholarship.service.TestResultService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/test-results")
@CrossOrigin(origins = "*", maxAge = 3600)
public class TestResultController {
    
    @Autowired
    private TestResultService testResultService;
    
    /**
     * Submit a new test result
     */
    @PostMapping("/submit")
    public ResponseEntity<Map<String, Object>> submitTestResult(@RequestBody TestResult testResult) {
        try {
            // Set submission time if not already set
            if (testResult.getSubmittedAt() == null) {
                testResult.setSubmittedAt(LocalDateTime.now());
            }
            
            // Validate required fields
            if (testResult.getEmail() == null || testResult.getEmail().isEmpty()) {
                Map<String, Object> errorResponse = new HashMap<>();
                errorResponse.put("message", "Email is required");
                errorResponse.put("status", "error");
                return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
            }
            
            if (testResult.getPhone() == null || testResult.getPhone().isEmpty()) {
                Map<String, Object> errorResponse = new HashMap<>();
                errorResponse.put("message", "Phone is required");
                errorResponse.put("status", "error");
                return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
            }
            
            if (testResult.getTestType() == null || testResult.getTestType().isEmpty()) {
                Map<String, Object> errorResponse = new HashMap<>();
                errorResponse.put("message", "Test type is required");
                errorResponse.put("status", "error");
                return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
            }
            
            TestResult savedResult = testResultService.saveTestResult(testResult);
            
            Map<String, Object> response = new HashMap<>();
            response.put("message", "Test result submitted successfully");
            response.put("id", savedResult.getId());
            response.put("status", "success");
            response.put("totalMarks", savedResult.getTotalMarks());
            response.put("accuracy", testResultService.getAccuracyPercentage(savedResult));
            
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        } catch (Exception e) {
            e.printStackTrace();
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("message", "Error submitting test result: " + e.getMessage());
            errorResponse.put("status", "error");
            
            return new ResponseEntity<>(errorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    /**
     * Get test result by ID
     */
    @GetMapping("/{id}")
    public ResponseEntity<Map<String, Object>> getTestResultById(@PathVariable Long id) {
        try {
            Optional<TestResult> testResult = testResultService.getTestResultById(id);
            
            if (testResult.isPresent()) {
                Map<String, Object> response = new HashMap<>();
                response.put("message", "Test result found");
                response.put("data", testResult.get());
                response.put("accuracy", testResultService.getAccuracyPercentage(testResult.get()));
                response.put("status", "success");
                
                return new ResponseEntity<>(response, HttpStatus.OK);
            } else {
                Map<String, Object> errorResponse = new HashMap<>();
                errorResponse.put("message", "Test result not found");
                errorResponse.put("status", "error");
                
                return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("message", "Error retrieving test result: " + e.getMessage());
            errorResponse.put("status", "error");
            
            return new ResponseEntity<>(errorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    /**
     * Get all test results
     */
    @GetMapping ("/all")
    public ResponseEntity<Map<String, Object>> getAllTestResults() {
        try {
            List<TestResult> results = testResultService.getAllTestResults();
            
            Map<String, Object> response = new HashMap<>();
            response.put("message", "All test results retrieved");
            response.put("count", results.size());
            response.put("data", results);
            response.put("status", "success");
            
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("message", "Error retrieving test results: " + e.getMessage());
            errorResponse.put("status", "error");
            
            return new ResponseEntity<>(errorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    /**
     * Get test results by email
     */
    @GetMapping("/by-email/{email}")
    public ResponseEntity<Map<String, Object>> getTestResultsByEmail(@PathVariable String email) {
        try {
            List<TestResult> results = testResultService.getTestResultsByEmail(email);
            
            Map<String, Object> response = new HashMap<>();
            response.put("message", "Test results found for email: " + email);
            response.put("count", results.size());
            response.put("data", results);
            response.put("status", "success");
            
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("message", "Error retrieving test results: " + e.getMessage());
            errorResponse.put("status", "error");
            
            return new ResponseEntity<>(errorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    /**
     * Get test results by test type
     */
    @GetMapping("/by-test-type/{testType}")
    public ResponseEntity<Map<String, Object>> getTestResultsByTestType(@PathVariable String testType) {
        try {
            List<TestResult> results = testResultService.getTestResultsByTestType(testType);
            
            Map<String, Object> response = new HashMap<>();
            response.put("message", "Test results found for test type: " + testType);
            response.put("count", results.size());
            response.put("data", results);
            response.put("status", "success");
            
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("message", "Error retrieving test results: " + e.getMessage());
            errorResponse.put("status", "error");
            
            return new ResponseEntity<>(errorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    /**
     * Get test results by email and test type
     */
    @GetMapping("/by-email/{email}/test/{testType}")
    public ResponseEntity<Map<String, Object>> getTestResultsByEmailAndTestType(
            @PathVariable String email,
            @PathVariable String testType) {
        try {
            List<TestResult> results = testResultService.getTestResultsByEmailAndTestType(email, testType);
            
            Map<String, Object> response = new HashMap<>();
            response.put("message", "Test results found for email and test type");
            response.put("count", results.size());
            response.put("data", results);
            response.put("status", "success");
            
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("message", "Error retrieving test results: " + e.getMessage());
            errorResponse.put("status", "error");
            
            return new ResponseEntity<>(errorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    /**
     * Delete a test result
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, Object>> deleteTestResult(@PathVariable Long id) {
        try {
            Optional<TestResult> testResult = testResultService.getTestResultById(id);
            
            if (testResult.isPresent()) {
                testResultService.deleteTestResultById(id);
                
                Map<String, Object> response = new HashMap<>();
                response.put("message", "Test result deleted successfully");
                response.put("status", "success");
                
                return new ResponseEntity<>(response, HttpStatus.OK);
            } else {
                Map<String, Object> errorResponse = new HashMap<>();
                errorResponse.put("message", "Test result not found");
                errorResponse.put("status", "error");
                
                return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("message", "Error deleting test result: " + e.getMessage());
            errorResponse.put("status", "error");
            
            return new ResponseEntity<>(errorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    /**
     * Get statistics for a test type
     */
    @GetMapping("/statistics/{testType}")
    public ResponseEntity<Map<String, Object>> getStatisticsForTestType(@PathVariable String testType) {
        try {
            List<TestResult> results = testResultService.getTestResultsByTestType(testType);
            
            if (results.isEmpty()) {
                Map<String, Object> errorResponse = new HashMap<>();
                errorResponse.put("message", "No results found for test type: " + testType);
                errorResponse.put("status", "error");
                
                return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
            }
            
            double averageMarks = testResultService.getAverageMarksForTestType(testType);
            double totalAverageAccuracy = results.stream()
                    .mapToDouble(r -> testResultService.getAccuracyPercentage(r))
                    .average()
                    .orElse(0);
            
            Map<String, Object> response = new HashMap<>();
            response.put("message", "Statistics for test type: " + testType);
            response.put("totalParticipants", results.size());
            response.put("averageMarks", averageMarks);
            response.put("averageAccuracy", totalAverageAccuracy);
            response.put("status", "success");
            
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("message", "Error retrieving statistics: " + e.getMessage());
            errorResponse.put("status", "error");
            
            return new ResponseEntity<>(errorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
