---
title: C#示例代码
date: 2023-04-08 15:28:00
description: practice
categories:
- program
tags: 
- practice,c#
---

---
# 出租车价钱计算
```c#
using System;

namespace ConsoleApp1
{
    internal class Class1
    {
        static void Main(string[] args)
        {
            double distance,price = 0;
            Console.WriteLine("请输入总里程数");
            distance=Convert.ToDouble(Console.ReadLine());
            if (distance <= 3 && distance >= 0)
            {
                price = 10;
            }
            else if (distance > 3 && distance <= 10)
            {
                price = (distance - 3) * 1.2 + 10;
            }
            else if (distance > 10)
            {
                price = (distance - 10) * 1.5 + 18.4;
            }
            else 
            {
                Console.WriteLine("里程数错误，请重新输入");
            }
            Console.WriteLine("应付的车费为：{0}",price);
        }
    }
}
```

---

# 简易计算器
```c#
using System;

namespace ConsoleApp1
{
    internal class Class1
    {
        static void Main(string[] args)
        {
            double no1, no2, result = 0;
            Console.WriteLine("请输入运算式左边的数");
            no1 = Convert.ToDouble(Console.ReadLine());
            Console.WriteLine("请输入运算式右边的数");
            no2 = Convert.ToDouble(Console.ReadLine());
            Console.WriteLine("请输入运算符 + - * /");
            string op = Console.ReadLine();
            switch (op)
            {
                case "+":
                    result = no1 + no2;
                    break;
                case "-":
                    result = no1 - no2;
                    break;
                case "*":
                    result = no1 * no2;
                    break;
                case "/":
                    if (no2 != 0)
                    {
                        result = no1 / no2;
                    }
                    else
                    {
                        Console.WriteLine("除数不能为0");
                    }
                    break;
            }
            Console.WriteLine("result：{0:f2}", result);
        }
    }
}
```

---

# 出行计算

```C#
using System;

namespace ConsoleApplication8
{
    class Program
    {
        static void Main(string[] args)
        {
            int month, choice=0,flag=0;
            double money=0;
            Console.WriteLine("请输入出行月份");
            month = int.Parse(Console.ReadLine());
            Console.WriteLine("请输入出行方式（1-航班出行 2-动车出行）");
            choice = int.Parse(Console.ReadLine());
            if (month >= 5 && month <= 10)
            {
                switch (choice)
                {
                    case 1:
                        money = 8800 * 0.9;
                        break;
                    case 2:
                        money = 8800 * 0.75;
                        break;
                }
            }
            else if (month >= 1 && month < 5 || month > 10 && month <= 12)
            {
                switch (choice)
                {
                    case 1:
                        money = 8800 * 0.6;
                        break;
                    case 2:
                        money = 8800 * 0.3;
                        break;
                }
            }
            else
            {
                flag = 1;
            }
            if (flag == 0)
            {
                Console.WriteLine("实际价格为：{0}", money);
            }
            else
            {
                Console.WriteLine("输入错误");
            }
        }
    }
}
```

---

# 一元二次方程计算
```c#
using System;

namespace ConsoleApplication8
{
    class Program
    {
        static void Main(string[] args)
        {
            double a, b, c, delta, x1, x2;
            Console.WriteLine("请依次输入一元二次方程一般式的a、b、c");
            Console.WriteLine("a:");
            a = Convert.ToDouble(Console.ReadLine());
            Console.WriteLine("b:");
            b = Convert.ToDouble(Console.ReadLine());
            Console.WriteLine("c:");
            c = Convert.ToDouble(Console.ReadLine());
            delta = b * b - 4 * a * c;
            if (delta > 0)
            {
                x1 = -b / 2 * a + Math.Sqrt(delta);
                x2 = -b / 2 * a - Math.Sqrt(delta);
                Console.WriteLine("x1={0},x2={1}", x1, x2);
            }
            else if (delta == 0)
            {
                x1 = -b / 2 * a + Math.Sqrt(delta);
                Console.WriteLine("x1=x2={0}", x1);
            }
            else
            {
                Console.WriteLine("该方程没有实根");
            }
        }
    }
}
```

---

# 定义类并实现输出
```c#
using System;

namespace ConsoleApp1
{
    public class Panda
    {
        public string name;
        public double age;
        public string feature;
        public void Print()
        {
            Console.WriteLine("name:{0}，age:{1}，feature:{2}",name,age,feature);
        }
    }
    internal class Problem
    {
        static void Main(string[] args)
        {
            Panda Panda_1 = new Panda();
            Panda Panda_2 = new Panda();
            Panda_1.name = "花花";
            Panda_1.age = 2;
            Panda_1.feature = "优雅可爱";
            Panda_2.name = "萌兰";
            Panda_2.age = 7;
            Panda_2.feature = "阳光开朗";
            Panda_1.Print();
            Panda_2.Print();
        }
    }
}
```

---

# 计算圆的面积与周长
```c#
using System;

namespace ConsoleApp1
{
    public class Circle
    {
        public double radius;
        //计算圆的周长
        public double C()
        {
            return 2 * Math.PI * radius;
        }
        //计算圆的面积
        public double Area()
        {
            return Math.PI * radius * radius;
        }
    }
    internal class Problem
    {
        static void Main(string[] args)
        {
            //创建两个Circle对象
            Circle obj1 = new Circle();
            Circle obj2 = new Circle();
            //第一个圆输出
            Console.WriteLine("请输入第一个圆的半径：");
            obj1.radius = Convert.ToDouble(Console.ReadLine());
            Console.WriteLine("第一个圆的周长为{0:0.00}，面积为：{1:0.00}", obj1.C(), obj1.Area());
            //第二个圆输出
            Console.WriteLine("请输入第二个圆的半径：");
            obj2.radius = Convert.ToDouble(Console.ReadLine());
            Console.WriteLine("第二个圆的周长为{0:0.00}，面积为：{1:0.00}", obj2.C(), obj2.Area());
        }
    }
}
```
