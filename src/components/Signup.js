import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import {
  CustomBttn,
  Input,
  Lable,
  Heading2,
} from "./Commen_Components/CommanStyles";
import signupImg from "../assets/Active Support-pana.svg";
import FileUpload from "./fileupload/FileUpload";

import { password_matcher, input_required, pass_validator } from "../utils/validation";

const LoginImg = styled.img`
  /* width: 512px; */
  margin: auto;
  width: 75%;
`;

const LoginCol = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
`;

const LoginBttn = styled(CustomBttn)`
  width: 150px;
  margin: 5px 0px;
`;

const TextArea = styled.textarea`
  border-radius: 5px;
  border: 2px solid;
  padding: 5px;
  margin-bottom: 5px;
`;

const SeparateDiv = styled.div`
  border-radius: 10px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* margin-bottom: 15px; */
  text-align: left;
`;

const OuterDiv = styled.div`
  background: linear-gradient(to right, #457fca, #5691c8);
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px;
`;

const SubHeading = styled.h1`
  font-weight: bolder;
  font-size: 20px;
`;

function Signup(props) {

  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState(null);
  const [bName, setBName] = useState(null);

  const [cEmail, setCEmail] = useState(null);//contactEmail
  const [pNumber, setPNumber] = useState(null);
  const [fax, setFax] = useState(null);

  const [password, setpassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState("");

  const [socialMedia, setSocialMedia] = useState({facebook:"",instagram:"",twitter:""});
  const [companyDetails, setCompanyDetails] = useState({description:"",service:"",details:{location:""}});

  const [imageUrl, setImageUrl] = useState("");
  const [files, setFiles] = useState([]);
  const [filesU, setFilesU] = useState({});

  const [specialRemarks, setSpecialRemarks] = useState("");

  const updateUploadedFiles = async (files) => {
    if (files.length !== 0) {
      setFiles(files);
      console.log(files[0]);

      // const { status, error, data } = await fileService.handleCreate(files[0]);

      // if (status) {
      //   console.log("fileURL", data?.fileUrl);
      //   setImageUrl(data?.fileUrl);
      // } else {
      //   console.log("error", error);
      // }
    }
  };

  return (
    <Container>
      {/* <Row style={{ paddingTop: "10px" }}> */}
      <OuterDiv>
        <LoginCol md={7} sm={12} xs={12}>
          <SeparateDiv>
            <Heading2>Get Started with CircleBook WAAS Services</Heading2>

            <LoginImg src={signupImg} />
            <Row>
              <Col>
                <Lable style={{ paddingRight: "20px" }}>First Name</Lable>
                <Input
                  type="text"
                  placeholder="Enter your first name"
                  onChange={(e) => {
                    setFName(e.target.value);
                  }}
                />
              </Col>
              <Col>
                <Lable style={{ paddingRight: "20px" }}>Last Name</Lable>
                <Input
                  type="text"
                  placeholder="Enter your last name"
                  onChange={(e) => {
                    setLName(e.target.value);
                  }}
                />
              </Col>
            </Row>

            <Lable>Email Address</Lable>
            <Input
              type="email"
              placeholder="Enter your email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <Lable>Bussiness Name</Lable>
            <Input
              type="text"
              placeholder="Enter your bussiness name"
              onChange={(e) => {
                setBName(e.target.value);
              }}
            />

            <hr style={{ height: "5px" }} />
            <SubHeading>Contact Details</SubHeading>
            <Lable>Email Address</Lable>
            <Input
              type="email"
              placeholder="Enter Contact email"
              onChange={(e) => {
                setCEmail(e.target.value);
              }}
            />
            <Lable>Phone Number</Lable>
            <Input
              type="text"
              placeholder="Enter your phone number"
              onChange={(e) => {
                setPNumber(e.target.value);
              }}
            />

            <Lable>Fax</Lable>
            <Input
              type="text"
              placeholder="Enter your fax"
              onChange={(e) => {
                setFax(e.target.value);
              }}
            />
            <hr style={{ height: "5px" }} />

            <Lable>Password</Lable>
            <Input
              type="password"
              placeholder="Enter your password"
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />

            <Lable>Confirm Password</Lable>
            <Input
              type="password"
              placeholder="Confirm your password"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />

            <Lable>Social Media</Lable>
            <Input
              type="text"
              placeholder=""
              onChange={(e) => {
                //setemail(e.target.value);
              }}
            />

            <hr style={{ height: "5px" }} />
            <SubHeading>About the Company</SubHeading>
            <Lable>Company Discription</Lable>
            <Input
              type="text"
              placeholder=""
              onChange={(e) => {
                setCompanyDetails({location:e.target.value});
              }}
            />
            <Lable>Services They Provide</Lable>
            <Input
              type="text"
              placeholder="Enter your phone number"
              onChange={(e) => {
                setCompanyDetails({service:e.target.value});
              }}
            />

            <Lable>Company Details</Lable>
            <Input
              type="text"
              placeholder="Location"
              onChange={(e) => {
                setCompanyDetails({description:e.target.value});
              }}
            />
            <Input
              type="text"
              placeholder="Customers"
              onChange={(e) => {
                //setemail(e.target.value);
              }}
            />
            <TextArea
              type="text"
              placeholder="Customer Reviews"
              rows="4"
              onChange={(e) => {
                //setemail(e.target.value);
              }}
            />
            <hr style={{ height: "5px" }} />

            <Lable>Image</Lable>
            <FileUpload
              style={{ backgroundColor: "#ededed" }}
              accept=".jpg,.png,.jpeg"
              label="News Image(s)"
              files={filesU}
              setFiles={setFilesU}
              updateFilesCb={updateUploadedFiles}
            />
            {files[0] && (
              <p>
                {"name : " + files[0].name}
                <br />
                {"size : " + (files[0].size / 1000000).toFixed(2)}MB
              </p>
            )}

            <Lable>Special Remarks</Lable>
            <TextArea
              type="text"
              placeholder=""
              rows="4"
              onChange={(e) => {
                setSpecialRemarks(e.target.value);
              }}
            />
          </SeparateDiv>
        </LoginCol>
        {/* </Row> */}
      </OuterDiv>
    </Container>
  );
}

export default Signup;
