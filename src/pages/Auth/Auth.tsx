import React, { SyntheticEvent, useState, useEffect } from "react";
import { Row, Col, Input, Button, Alert } from "antd";
import "./index.css";
import { Redirect } from "react-router";

const Auth = () => {
    const [loginValue, setLoginValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [isErrorBlockVisible, setErrorBlockVisibility] = useState(false);
    
    // useEffect(() => {
    //     if(localStorage.getItem("isAuthenticated") === "true") {
    //         isAuth = true;
    //     }
    // }, [])


    const sendRequest = () => {
        const data = JSON.stringify({login: loginValue, pass: passwordValue});
        fetch("http://localhost:5000/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: data,
        })
        .then(res => res.json())
        .then(
            res => {
                if(res.isAuthenticated) {
                    localStorage.setItem("isAuthenticated", "true");
                } else {
                    setErrorBlockVisibility(true);
                }
            }
        )
        .catch(err => {console.log(err)});
    }

    
    return isAuth ?
            (<Redirect to="/" />)
        :
            (<Row
                className="auth__main-row"
                justify="center"
                align="middle"
                gutter={[0, 16]}
                style={{marginTop: "40vh"}}
            >
                <Col span={12} offset={6}>
                    <Input
                        placeholder="Login"
                        value={loginValue}
                        onChange={(e: SyntheticEvent) => {
                            setLoginValue((e.currentTarget as HTMLInputElement).value);
                            setErrorBlockVisibility(false)
                        }}
                    />
                </Col>
                <Col span={12} offset={6}>
                    <Input.Password
                        placeholder="pass"
                        value={passwordValue}
                        onChange={(e: SyntheticEvent) => {
                            setPasswordValue((e.currentTarget as HTMLInputElement).value);
                            setErrorBlockVisibility(false);
                        }}
                    />
                </Col>
                <Col span={12} offset={6}>
                    <Button onClick={sendRequest}>Submit</Button>
                </Col>
                {
                    isErrorBlockVisible &&
                    <Col span={12} offset={6}>
                        <Alert message="Login/Pass is incorrect" type="error" />
                    </Col>
                }
            </Row>)
}

export default Auth;
