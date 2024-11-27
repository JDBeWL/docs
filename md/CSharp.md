---
title: C#示例代码
date: 2023-04-08 15:28:00
description: practice
categories:
- program
tags: 
- practice,c#
---
>分享一首歌
<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=2048055314&auto=1&height=66"></iframe>

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

# 计算面积与周长
- 1 基础算法-（计算圆）
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

---

- 2 使用继承和属性-（计算矩形）
```c#
using System;

namespace ConsoleApp1
{
    class Shape
    {
        private string name;
        public string Name
        {
            get
            {
                return name;
            }
            set
            {
                name = value;
            }
        }
        public Shape(string name)
        {
            this.Name = name;
        }
    }
    class rectangle:Shape
    {
        private double len;
        private double width;
        public double Len
        {
            get
            {
                return len;
            }
            set
            {
                len = value;
            }
        }
        public double Width
        {
            get
            {
                return width;
            }
            set
            {
                width = value;
            }
        }
        public rectangle(double len, double width,string name):base(name)
        {
            this.Len = len;
            this.Width = width;
        }
        public void getArea()
        {
            Console.WriteLine("编号：{0}，面积：{1}",Name,Len * Width);
        }
        public void getCircumference()
        {
            Console.WriteLine("编号：{0}，周长：{1}", Name,2*(Len+Width));
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("请输入长：");
            double Width = double.Parse(Console.ReadLine());
            Console.Write("请输入宽：");
            double Len = double.Parse(Console.ReadLine());
            rectangle Rect = new rectangle(Len, Width, "Rec");
            Rect.getArea();
            Rect.getCircumference();
        }
    }
}

```

---

# 密码校验
```C#
using System;

namespace ConsoleApplication1
{
    class AuthLogin
    {
        string username="user";
        string password="12345678";
        public void Set(string username,string password)
        {
            if (username == this.username)
            {
                if (password == this.password)
                {
                    Console.WriteLine("登录成功");
                }
                else
                {
                    Console.WriteLine("密码错误");
                }
            }
            else
            {
                Console.WriteLine("账户错误");
            }
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            AuthLogin user = new AuthLogin();
            string username=Console.ReadLine();
            string password=Console.ReadLine();
            user.Set(username, password);
            Console.ReadKey();
        }
    }
}
```

---

# 定义Book类格式化输出book信息
```c#
using System;

namespace ConsoleApplication1
{
    public class Book
    {
        double id;
        string name;
        double price;
        public void Set(double id,string name,double price)
        {
            this.id = id;
            this.name = name;
            this.price = price;
        }
        public void PrintMsg()
        {
            Console.WriteLine("id:{0},name:{1},price:{2}",id,name,price);
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            double id = double.Parse(Console.ReadLine());
            string name = Console.ReadLine();
            double price = double.Parse(Console.ReadLine());
            Book book = new Book();
            book.Set(id,name,price);
            book.PrintMsg();
        }
    }
}
```

---

# 银行存款
```c#
using ConsoleApp3;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices.WindowsRuntime;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp3
{
    class PersonalAccount
    {
        private string accountName;
        private double accountRemainValue;
        //账户信息
        public PersonalAccount(string name, double remainValue)
        {
            accountName = name;
            accountRemainValue = remainValue;
        }
        //存款
        public void Deposit(double value)
        {
            accountRemainValue += value;
        }
        //取款
        public bool Withdraw(double value)
        {
            if(accountRemainValue>=value)
            {
                accountRemainValue -= value;
                return true;
            }
            else
            {
                Console.WriteLine("余额不足，无法取款");
                return false;
            }
        }
        public void DisplayRemain()
        {
            Console.WriteLine("账户：{0}，余额：{1}",accountName,accountRemainValue);
        }
    }
    internal class Program
    {
        static void Main(string[] args)
        {
            PersonalAccount account = new PersonalAccount("张三",2000);
            //显示余额
            account.DisplayRemain();
            //存款
            account.Deposit(1000);
            account.DisplayRemain();
            //取款
            account.Withdraw(4000);//失败
            account.Withdraw(2000);
            account.DisplayRemain();//成功   
        }
    }
}
```

---

# 百钱买百鸡
```c#
using System;

namespace ConsoleApplication12
{
    class Program
    {
        static void Main(string[] args)
        {
            int cock,hen,chicken;
            for (cock = 0; cock <= 20; cock++)
            {
                for (hen = 0; hen <= 33; hen++)
                {
                    chicken = 100 - cock - hen;
                    if (cock * 5 + hen * 3 + chicken / 3.0 == 100)
                    {
                        Console.WriteLine("公鸡：{0}只，母鸡：{1}只，小鸡：{2}只", cock, hen, chicken);
                    }
                    
                }
            }
        }
    }
}
```

---

# 素数计算
```c#
using System;

namespace ConsoleApplication12
{
    class Program
    {
        static void Main(string[] args)
        {
            int i, j,count=0;
            for (i = 2; i <= 300; i++)
            {
                for (j = 2; j < Math.Sqrt(i); j++)
                {
                    if (i % j == 0)
                    {
                        break;
                    }
                }
                if (j > Math.Sqrt(i))
                {
                    Console.Write("{0}\t", i);
                    count++;
                    if (count % 10 == 0)
                    {
                        Console.Write("\n");
                    }
                }             
            }
            Console.WriteLine();
        }
    }
}
```

---

# 珠穆朗玛-对折
```c#
using System;

namespace ConsoleApplication12
{
    class Program
    {
        static void Main(string[] args)
        {

            double h=0,x,count=0;
            Console.WriteLine("请输入纸的厚度x（单位：毫米）");
            Console.Write("x=");
            x=Convert.ToDouble(Console.ReadLine());
            h = x;
            do
            {
                h = 2 * h;
                count++;
            } while (h <= 8844.43 * 1000);
            Console.WriteLine("对折{0}次后，其厚度达到珠穆朗玛峰的高度8844.43米",count);
        }
    }
}

```

---

# 分数计算
```c#
using System;

namespace ConsoleApplication1
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] s=new int[10];
            double a; 
            int sum = 0, min = 0, max = 0;
            Console.WriteLine("请输入分数");
            for (int i = 0; i < 10; i++)
            {
                s[i] = int.Parse(Console.ReadLine());
            }
            max=min=s[0];
            foreach (int x in s)
            {
                sum += x;
                max = Math.Max(x, max);
                min = Math.Min(x, min);
            }
            Console.WriteLine("平均值：" + sum / 10.0 + "最高分：" + max + "最低分：" + min);
        }
    }
}
```

---

# 杨辉三角
```c#
using System;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            int[,] yanghui = new int[10, 10];
            for(int i=0;i<=9;i++)
            {
                yanghui[i, 0] = 1;
                yanghui[i, i] = 1;
            }
            for(int i=2;i<=9;i++)
            {
                for(int j=1;j<i;j++)
                {
                    yanghui[i, j] = yanghui[i - 1, j - 1] + yanghui[i - 1, j];
                }
            }
            for(int i=0;i<=9;i++)
            {
                for(int j=0;j<=i;j++)
                {
                    Console.Write("{0}\t", yanghui[i, j]);
                }
                Console.Write("\n");
            }
        }
    }
}
```
