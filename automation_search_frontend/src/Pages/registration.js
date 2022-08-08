import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function Registration() {
    return (
        <div className=' container center_div'>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicAppName">
        <Form.Label>Automation Application Name</Form.Label>
        <Form.Control type="appName" placeholder="Application Name" />
         </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicAppType">
        <Form.Label>Application Technogy Type</Form.Label>
        <Form.Control type="techType" placeholder="Technology Type" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicLOB">
        <Form.Label>LOB</Form.Label>
        <Form.Control type="lob" placeholder="Enter Application LOB" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicGITURL">
        <Form.Label>GIT URL</Form.Label>
        <Form.Control type="techType" placeholder="Enter Application GIT URL" />
      </Form.Group>
      <Button variant="primary" type="submit" className='cen'>
        Submit
      </Button>
    </Form>
    </div>
    );
  }
  
  export default Registration;