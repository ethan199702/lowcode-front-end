import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button } from "antd";
import { useUserStore } from "@/store";

import { randomImage, login } from "service/login";

import LoginBgImg from "@/assets/images/login/bg.png";

interface loginFields {
  user_name: string;
  password: string;
  captcha: string;
}

const Login = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { updateState } = useUserStore();
  const navigate = useNavigate();
  const [dateNow, setDataNow] = useState("");
  const [isAcquireCode, setIsAcquireCode] = useState(false);
  const [randomCodeTime, setRandomCodeTime] = useState(0);

  useEffect(() => {
    if (isAcquireCode) {
      const timer = setInterval(() => {
        setRandomCodeTime(prev => prev - 1);
      }, 1000);
      return () => {
        clearInterval(timer);
      };
    }
  }, [isAcquireCode]);

  useEffect(() => {
    if (randomCodeTime === 0) setIsAcquireCode(false);
  }, [randomCodeTime]);

  useEffect(() => {
    getRandomImage();
  }, []);

  const drawCaptcha = (captchaCode: string) => {
    const canvas = canvasRef.current;
    const ctx = canvas!.getContext("2d");
    if (ctx && canvas) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 设置背景
      ctx.fillStyle = "#f0f0f0";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 设置字体
      ctx.font = "40px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#333";

      // 绘制验证码
      ctx.fillText(captchaCode, canvas.width / 2, canvas.height / 2);

      // 添加干扰线条
      addNoise(ctx, canvas.width, canvas.height);
    }
  };

  const addNoise = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number
  ) => {
    for (let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.moveTo(Math.random() * width, Math.random() * height);
      ctx.lineTo(Math.random() * width, Math.random() * height);
      ctx.strokeStyle = "#ccc";
      ctx.lineWidth = 1;
      ctx.stroke();
    }
  };

  const getRandomImage = () => {
    const now = new Date().getTime().toString();
    setDataNow(now);
    randomImage(now).then(({ result }) => {
      drawCaptcha(result);
    });
  };

  const handleGetRandomCodeClick = () => {
    setIsAcquireCode(true);
    setRandomCodeTime(60);
    getRandomImage();
  };

  const onFinish = (values: any) => {
    login({ ...values, checkKey: dateNow }).then(res => {
      if (updateState) updateState({ ...(res?.result || {}) });
      navigate("/main");
    });
  };
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
  };
  return (
    <div
      className="w-full h-full flex justify-center items-center"
      style={{
        backgroundImage: `url(${LoginBgImg})`,
        backgroundSize: "contain"
      }}
    >
      <div className="w-[700px] h-[400px]">
        <p className="text-center text-[25px]">
          欢迎登录经营管控与数据应用平台
        </p>
        <Form {...layout} onFinish={onFinish}>
          <Form.Item<loginFields>
            label="用户名"
            name={"user_name"}
            rules={[{ required: true, message: "请输入用户名" }]}
          >
            <Input placeholder="请输入用户名" />
          </Form.Item>
          <Form.Item<loginFields>
            label="密码"
            name={"password"}
            rules={[{ required: true, message: "请输入密码" }]}
          >
            <Input.Password placeholder="请输入密码" />
          </Form.Item>

          <Form.Item<loginFields>
            label="验证码"
            name={"captcha"}
            rules={[{ required: true, message: "请输入验证码" }]}
          >
            <div className="flex justify-between items-center">
              <Input placeholder="请输入验证码" />
              <canvas
                ref={canvasRef}
                className="w-[80px] h-full cursor-pointer mx-2  inline-block box-border"
              ></canvas>
              <Button
                type="primary"
                onClick={handleGetRandomCodeClick}
                disabled={isAcquireCode}
              >
                {isAcquireCode ? `重新获取(${randomCodeTime})` : "获取验证码"}
              </Button>
            </div>
          </Form.Item>
          <Form.Item label=" " colon={false}>
            <Button type="primary" className="w-full" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
