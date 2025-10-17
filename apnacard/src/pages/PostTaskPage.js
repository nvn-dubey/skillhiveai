// Simplified example of what your PostTaskPage should do
import React, { useState } from 'react';

function PostTaskPage() {
  const [formData, setFormData] = useState({
    projectName: '',
    contactEmail: '', // Renamed from email to match Go model
    contactPhone: '', // New field for contact number
    description: '',  // Renamed from taskDescription
    freelancerType: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:8080/api/tasks', { // <-- Go server endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Task posted successfully!");
        // Reset form after successful submission (clears the fields)
        setFormData({
          projectName: '',
          contactEmail: '',
          contactPhone: '',
          description: '',
          freelancerType: '',
        });
        // Optionally, redirect to another page, e.g., using React Router:
        // navigate('/tasks'); // If using react-router-dom
      } else {
        alert("Failed to post task. Server error.");
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("Network error. Could not connect to the server.");
    }
  };

  return (
    <div className="container my-5" style={{ maxWidth: '600px' }}>
      <h1 className="text-center mb-4">Post a New Task/Project</h1>
      <form className="mt-4" onSubmit={handleSubmit}>
        
        {/* Freelancer Type Field */}
        <div className="mb-3">
          <label htmlFor="freelancerType" className="form-label">Required Freelancer Type</label>
          <select 
            className="form-select" 
            id="freelancerType" 
            value={formData.freelancerType}
            onChange={handleChange}
            required>
            <option value="">Select a Category</option>
            <option value="web-development">Web Developer</option>
            <option value="graphic-design">Graphic Designer</option>
            <option value="mobile application">Content Writer</option>
            <option value="digital-marketing">Digital Marketer</option>
            <option value="mobile-app-development">Mobile App Developer</option> 
            <option value="seo-specialist">SEO Specialist</option> 
            <option value="video-editor">Video Editor</option>
            <option value="data-analyst">Data Analyst</option>
            <option value="virtual-assistant">Virtual Assistant</option>
            <option value="customer-support">ui/ux</option>
            <option value="other">Other</option>
            
            {/* ... other options ... */}
          </select>
        </div>
        
        {/* Project Name Field */}
        <div className="mb-3">
          <label htmlFor="projectName" className="form-label">Project Name</label>
          <input 
            type="text" 
            className="form-control" 
            id="projectName" 
            value={formData.projectName}
            onChange={handleChange}
            required 
          />
        </div>
        
        {/* Contact Email Field */}
        <div className="mb-3">
          <label htmlFor="contactEmail" className="form-label">Contact Email</label>
          <input 
            type="email" 
            className="form-control" 
            id="contactEmail" // Changed from 'email' to 'contactEmail' for clarity
            value={formData.contactEmail}
            onChange={handleChange}
            required 
          />
        </div>

        {/* Contact Phone Field - New Addition */}
        <div className="mb-3">
          <label htmlFor="contactPhone" className="form-label">Contact Phone Number</label>
          <input 
            type="tel" 
            className="form-control" 
            id="contactPhone"
            value={formData.contactPhone}
            onChange={handleChange}
            required 
            placeholder="e.g., +1 (123) 456-7890"
          />
        </div>
        
        {/* Description Field */}
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Task/Project Description</label>
          <textarea 
            className="form-control" 
            id="description" // Changed from 'taskDescription'
            rows="5" 
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        
        <button type="submit" className="btn btn-primary w-100">Submit Your Task</button>
      </form>
    </div>
  );
}

export default PostTaskPage;
