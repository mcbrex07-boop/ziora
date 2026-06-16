'use client'

export default function EnquiryModal() {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h3 className="modal-title">Send Enquiry</h3>
          <button className="modal-close">&times;</button>
        </div>
        <div className="modal-body">
          <form>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input type="tel" placeholder="Enter your phone number" required />
            </div>
            <div className="form-group">
              <label>Division</label>
              <select required>
                <option value="">Select Division</option>
                <option>Mcbrex General</option>
                <option>Gynox Gynae</option>
                <option>Cardiwin Cardio Diabetic</option>
                <option>Criticine Care Critical Injectables</option>
                <option>Optibrex General</option>
                <option>Curicine General</option>
              </select>
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Enter your message" />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              Submit Enquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
