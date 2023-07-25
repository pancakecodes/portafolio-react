import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

interface FormDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const Contact: React.FC = () => {
  const formInitialDetails: FormDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  const [formDetails, setFormDetails] = useState<FormDetails>(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState<{ message: string; success?: boolean }>({});

  const onFormUpdate = (category: keyof FormDetails, value: string) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setButtonText('Sending...');
    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(formDetails),
      });

      setButtonText('Send');

      const result = await response.json();
      setFormDetails(formInitialDetails);

      if (result.code === 200) {
        setStatus({ message: 'Message sent successfully', success: true });
      } else {
        setStatus({ message: 'Something went wrong, please try again', success: false });
      }
    } catch (error) {
      setStatus({ message: 'Something went wrong, please try again', success: false });
    }
  };

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src="" alt="Contact Us" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      onFormUpdate('firstName', e.target.value)
                    }
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      onFormUpdate('lastName', e.target.value)
                    }
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email Address"
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      onFormUpdate('email', e.target.value)
                    }
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Phone Number"
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      onFormUpdate('phone', e.target.value)
                    }
                  />
                </Col>
                <Col>
                  <textarea
                    rows={6}
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                      onFormUpdate('message', e.target.value)
                    }
                  />
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
                {status.message && (
                  <Col>
                    <p className={status.success === false ? 'danger' : 'success'}>
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
