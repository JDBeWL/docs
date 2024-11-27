---
title: Java语言实例
date: 2023-09-12 20:15:29
description: program
categories:
  - program
tags:
  - program
---

---

# 猜数字小游戏
```java
package com.demo;

import java.util.Scanner;

public class Test   {
    public static void main(String[] args){
        //获得1至100的随机数
        int number = (int)(Math.random()*100+1);
        //输出要求
        System.out.println("给你一个1至100之间的整数，请猜测这个数");
        System.out.print("输入您的猜测：");
        Scanner input = new Scanner(System.in);
        //循环判断
        boolean x = false;
        do {
            //获得用户数据
            int guess = input.nextInt();
            //判断数据大小
            if (guess > number) {
                System.out.print("猜大了，再输入你的猜测:");
            } else if (guess < number) {
                System.out.print("猜小了，再输入你的猜测:");
            } else {
                System.out.print("猜对了！");
                x = true;
            }
        }while(!x);
    }
}
```

---

# 评定学生成绩等级
```java
package com.demo;

import java.util.Scanner;

public class Test3 {

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("请输入一个分数：");
        double score = input.nextDouble();
        if (score >= 90 && score <= 100) {
            System.out.println("优秀");
        } else if (score >= 80 && score < 90) {
            System.out.println("良好");
        } else if (score >= 70 && score < 80) {
            System.out.println("中等");
        } else if (score >= 60 && score < 70) {
            System.out.println("及格");
        } else if (score >= 0 && score < 60) {
            System.out.println("不及格");
        }else {
            System.out.println("超出范围");
        }
    }
}
```

---

# 读取用户输入的数，并判断结果
```java
package com.demo;

import java.util.Scanner;

public class Test2 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("请输入x：");
        double x = input.nextDouble();
        if (x<-2){
            System.out.println("y=-2");
        } else if (x>=-2&&x<2){
            System.out.print("y=");
            System.out.print(x+3);
        } else if (x>=2) {
            System.out.println("y=3");
        }
    }
}
```

---

# 简易计算器
```java
package com.demo;

import java.util.Scanner;

public class Test {
    public static void main(String args[]){
        boolean bool = true;
        //循环判断结果
        while(bool) {
            //获取用户数据
            Scanner input = new Scanner(System.in);
            System.out.println("请输入第一个数：");
            double input1 = input.nextDouble();
            System.out.println("请输入第二个数：");
            double input2 = input.nextDouble();
            System.out.println("请输入运算符(+、-、*、/)：");
            char Calculate = input.next().charAt(0);
            double output = 0;
            //计算用户数据
            switch(Calculate){
                case '+':
                    output = input1 + input2;
                    break;
                case '-':
                    output = input1 - input2;
                    break;
                case '*':
                    output = input1 * input2;
                    break;
                case '/':
                    output = input1 / input2;
                    break;
                default:
                    System.out.println("请输入正确的符号");
            }
            //输出数据
            System.out.println("结果是：" + input1 + Calculate + input2 + "=" + output);
            //判断是否结束循环
            System.out.println("请问要退出吗？y/n");
            char result = input.next().charAt(0);
            if(result == 'y') {
                System.out.println("程序结束！");
                bool = false;
            }else if(result == 'n'){
                bool = true;
            }
        }
    }
}
```