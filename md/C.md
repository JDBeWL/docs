---
cover: https://dsm01pap001files.storage.live.com/y4mJXEb6T3OHrpWXDm_UFKIkkhDJ_BSpE0M4QMcZO0p7q2v7vJR5gcatPRjTlw_AsJxkOnc0XuqKJv7-3Pgt26jmgRw-vxNSoduG8vPp4DlafWQt4huR3fhX_SM0POx2K7blJeJXF_7ZYV8c-jf9iWpP6fFHzoAYbGok4d93CvesFOQwlMAr91P4ws89jLLqg1V?width=427&height=520&cropmode=none
title: C语言实例
date: 2022-10-10 23:15:29
description: program
categories:
- program
tags: 
- program
---

---

# 长方形面积及周长计算

```c
#include<stdio.h>
int main()
{
	float h,w,s,l;
    printf("请输入高/宽\n");
	//输入数据以进行运算
	scanf("%f %f",&h,&w);
	//计算数据
	s=h*w,l=2*(h+w);
	//输出数据
	printf("面积=%.3f\n",s);
	printf("周长=%.3f\n",l);
	return 0;
}
```

---

# 小写字母转大写字母

```c
#include<stdio.h>
int main()
{
	char a,b;
	printf("输入任意小写字母:");
	//获取数据
	a=getchar();
	b=a-32;
	//输出数据
	printf("结果为:%c",b);
	return 0;
}
```

## 小写字母转大写字母的另一种办法
```c
#include<stdio.h>
int main()
{
	char a,b;
	printf("请输出小写字母:");
	//获取数据
	scanf("%c",&a);
	a='a';
	b=a-32;
	//输出数据
	printf("结果为%c",b);
	return 0;
}
```

---

# 计算圆的面积和周长

```c
#include<stdio.h>
#define PI 3.14
int main()
{
    float r;
	printf("请输入圆的半径");
	//获取圆的半径
	scanf("%f",&r);
	//输出圆的半径和周长
	printf("圆的半径s=%.3f\n",PI*r*r);
    printf("圆的周长d=%.3f\n",PI*r*2);
	return 0;
}
```

---

# 闰年的判断-1

```c
#include<stdio.h>
int main()
{
	int year;
	printf("请输入年份：");
	//获取年份
	scanf("%d",&year);
	//判断年份
	if(year%4==0&&year%100!=0||year%400==0)
		printf("改年份为闰年");
	else
		printf("改年份不是闰年");
	return 0;
}
```

## 闰年的判断-2

```c
#include<stdio.h>
int main()
{
	int year;
	printf("请输入年份：");
	//获取年份
	scanf("%d",&year);
	//判断年份
	if(year%4==0&&year%100!=0||year%400==0){
		printf("改年份为闰年");}
	else{
		printf("改年份不是闰年");};
	return 0;
}
```

---

# 数字计数

```c
#include<stdio.h>
int main()
{
	int sum,c0=0,c1=0,c2=0,c3=0,c4=0,c5=0,c6=0,c7=0,c8=0,c9=0;
	printf("请输入要计算的数据\n");
	//逐个数字判断
	while((sum=getchar())!='\n'){
			switch(sum)
			{
			case 0:++c0;break;
		    case 1:++c1;break;
			case 2:++c2;break;
			case 3:++c3;break;
			case 4:++c4;break;
			case 5:++c5;break;
			case 6:++c6;break;
			case 7:++c7;break;
			case 8:++c8;break;
			case 9:++c9;break;
			}
		}
	printf("0: %d次\n1: %d次\n2: %d次\n3: %d次\n4: %d次\n5: %d次\n6: %d次\n7: %d次\n8: %d次\n9: %d次\n",c0,c1,c2,c3,c4,c5,c6,c7,c8,c9);
	return 0;
}
```

---

# 三角形的判断

```c
#include <stdio.h>
int main()
{
	int a,b,c;
	printf("请输入三角形的三条边:");
	//获取三角形的三条边
	scanf("%d%d%d",&a,&b,&c);
	if(a+b>c&&a+c>b&&b+c>a)
		if(a==b&&b==c&&a==c)
			printf("该三角形为等边三角形");
		else if(a*a+b*b==c*c||a*a+c*c==b*b||b*b+c*c==a*a)
			printf("该三角形为直角三角形");
		else if(a==b||b==c||a==c)
			printf("该三角形为等腰三角形");
		else
			printf("该三角形为其他三角形");
	else
		printf("这不是一个三角形的的三条边"); 
}	

```

## 另外一种写法
```c
#include<stdio.h>
int main()
{
	int a,b,c;
	printf("请输入三角形的三条边");
	//获取三角形的三条边
	scanf("%d%d%d",&a,&b,&c);
	if (a+b>c&&a+c>b&&b+c>a)
	{
		if (a==b||a==c||b==c)
			if (a==b&&b==c)
				printf("这是一个等边三角形");
			else
				printf("这是一个等腰三角形");
		else if (a*a+b*b==c*c||a*a+c*c==b*b||b*b+c*c==a*a)
			printf("这是一个直角三角形");
		else
			pritnf("这是一个其他三角形")；
	}
	else
		printf("这不是一个三角形的三条边");
	return 0;
}
```
---

# 100分内等级的判断

```c
#include <stdio.h>
int main()
{
	int c,score;
	int ch;
	printf("请输入分数");
	//获取分数
	scanf("%d",&c);
	score=c/10;
	//判断等级
	if(c>0&&c<=100)	
	{
		switch(score)
		{
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:ch='E';break;
			case 6:ch='D';break;
			case 7:ch='C';break;
			case 8:ch='B';break;
			case 9:ch='A';break;
			case 10:ch='A';break;
		}
	
		printf("该学生等级为%c",ch);
	}
	else
		rintf("输入的分数错误");
}

```

---

# 按从小到大排列任意三个数

```c
#include <stdio.h>
int main()
{
    int a,b,c,t;
    printf("请输入三个不同大小的数字");
	//获取数字
    scanf("%d%d%d",&a,&b,&c);
	//判断数字
    if(a>b&&b>c)
        {t=c;c=a;a=t;}
    else if(a>c&&c>b)
        {t=b;b=c;c=a;a=t;}
    else if(b>c&&c>a)
        {t=b;b=c;c=t;}
    else if(b>a&&a>c)
        {t=c;c=b;b=a;a=t;}
    else if(c>a&&a>b)
        {t=b;b=a;a=t;}
    else if(c>b&&b>a)
        {a=a;b=b;c=c;}
    printf("从小到大依次为%d %d %d",a,b,c);
    return 0;
}
```

---

# 折扣计算

```c
#include<stdio.h>
int main()
{
	int p,c;
	float d,money;
	printf("请输入消费金额:");
	//获取金额
	scanf("%d",&p);
	//判断金额
	if(p>0)
	{
		c=p/200;
		if(c=0)
			d=0;
		else if(c==1)
			d=0.05;
		else if(c==2)
			d=0.1;
		else if(c==3)
			d=0.15;
		else if(c==4||c==5)
			d=0.2;
		else
			d=0.2;
		money=p*(1-d);
		printf("实际消费金额为%.2f",money);
	}
	else
		printf("金额错误，无法计算");
	return 0;
}
```

## 另外一种写法

```c
#include<stdio.h>
int main()
{
	int p, c;
	float d, money;
	printf("请输入消费金额:");
	//获取金额
	scanf("%d", &p);
	//判断金额
	if (p > 0)
	{
		switch
		{
		case 0:d=0;break;
		case 1:d=0.05;break;
		case 2:d=0.1;break;
		case 3:d=0.15;break;
		case 4:
		case 5:d=0.2;break;
		default:d=0.2;break;
		}
		money = p * (1 - d);
		printf("实际消费金额为%.2f", money);
	}
	else
		printf("金额错误，无法计算");
	return 0;
}
```

---

# 求s= 3+33+333+.....333333(n个)

```c
#include<stdio.h>
int main()
{
	int i,n;
	double num=3,sum=0;
	printf("请输入循环次数：");
	//获取数据
	scanf("%d",&n);
	//计算数据
	for(i=1;i<=n;i++)
	{
		sum=sum+num;
		num=num*10+3;
	}
	printf("s=%.0lf",sum);
}
```

---

# 输出如下\*号组成的图形,

> \*号的行数由键盘输入。

实例输出：

\* \* \* \* \* \*
\* \* \* \* \*
\* \* \* \*
\* \* \*
\* \*
\*


```c
#include <stdio.h>
int main()
{
	int i,j,n;
	printf("请输入数字：");
	//获取数字
	scanf("%d",&n);
	//打印图形
	for(j=1,j<=n;i++)
	{
		for(i=j;i<=n;i++)
		{
			printf("* ");
		}
		printf("\n");
	}
	return 0;
}
```

---

# 找出所有1000以内的回文素数

```c
#include<stdio.h>
int main()
{
	int i,j,n,k;
	//循环2到1000
	for(i=2;i<1000;i++)
	{
		//寻找素数
		for(j=2;j<i;j++)
		{
			if(i%j==0)
			break;
		}
		if(j!=i)
		{
			continue;//直到只有1和自身能整除时进入循环中的下一步
		}
		k=i;
		n=0;
		//判断回文数
		while(k>0)
		{
			n=n*10+k%10;
			k=k/10;
		}
		if(n==i)
		printf("%d ",i);
	}
	return 0;
}
```

---

# 计算e的值（可根据精度进行）

```c
#include<stdio.h>
int main()
{
    int i=1,n;
    double e = 1, sum, num = 1;
	//取得计算精度
    scanf("%d",&n);
	//计算不同精度的e值
    do
    {
        num = i * num;
        sum = 1 / num;
        e = e + sum;
        i++;
    } while (i<=n);
    printf("%.5lf", e);
    return 0;
}
```

---

# 计算选手平均成绩

```c
#include<stdio.h>
#define N 10
int main()
{
    int i,sum=0,max,min,a[N];
    float aver;
    printf("请输入成绩");
    for(i=0;i<N;i++)
    {
    	scanf("%d",&a[i]);
	}
	max=min=a[0];
	for(i=0;i<N;i++)
	{
		sum=sum+a[i];
		if(min>a[i])
			min=a[i];
		if(max<a[i])
			max=a[i];
	}
	aver=(sum-max-min)/8.0;
	printf("平均成绩为%.1f",aver); 
    return 0;
}
```

---

# 累加求得1到n的素数值和

```c
#include<stdio.h>
int sushu_2(int a)
{
	int j;
	for(j=2;j*j<=a;j++)//判断是否为素数，若为真则返回真，若为假则返回假 
		{
			if(a%j==0)
				return 0;//不为素数时返回假
		}
	return 1;//为素数时返回真 
}
int sushu_1(int a)
{
	int i,sum=0;
	for(i=2;i<=a;i++)
	{
		if(sushu_2(i))//嵌套函数，若值为真，则累加求得素数值 
		{
			sum+=i;
		}
	 }	
	return sum;
}
int main()
{
	int n;
	printf("请输入n的值：");
	scanf("%d",&n);
	printf("%d",sushu_1(n));
	return 0;
}
```

---

# 求斐波那契数列的值

```c
#include<stdio.h>
int fib(int a)
{
	if(a==1||a==2)
		return 1;//定义斐波那契数列前两项
	else
		return fib(a-1)+fib(a-2);//递归求得三项后的斐波那契数列
}
int main()
{
	int n;
	printf("请输入计算的位数n\n");
	scanf("%d",&n);
	printf("%d",fib(n));//打印斐波那契数列的值
}
```

---

# 排序（从大到小）

## 选择排序
```c
#include<stdio.h>
#define s 10
void PaiXu_XuanZe(int n,int arr[])
{
	int i,j,t;
	for(j=0;j<n-1;j++)
	{
		for(i=j+1;i<n;i++)
		{
			if(arr[j]<arr[i])
			{
				t=arr[i];
				arr[i]=arr[j];
				arr[j]=t;
			}
		}
	}
}
int main()
{
	int N[s],i;
	printf("请输入需要排列的数字\n");
	for(i=0;i<s;i++)
	{
		scanf("%d",&N[i]);
	}
	PaiXu_XuanZe(s,N);
	printf("结果为："); 
	for(i=0;i<s;i++)
	{
		printf("%-4d",N[i]);
	}
	return 0;
}
```

## 冒泡排序
```c
#include<stdio.h>
#define s 10
void PaiXu_MaoPao(int n,int arr[])
{
	int i,j,t;
	for(j=0;j<n-1;j++)
	{
		for(i=0;i<n-j-1;i++)
		{
			if(arr[i]<arr[i++])
			{
				t=arr[i+1];
				arr[i+1]=arr[i];
				arr[i]=t;
			}
		}
	}
}
int main()
{
	int N[s],i;
	printf("请输入需要排列的数字\n");
	for(i=0;i<s;i++)
	{
		scanf("%d",&N[i]);
	}
	PaiXu_XuanZe(s,N);
	printf("结果为："); 
	for(i=0;i<s;i++)
	{
		printf("%-4d",N[i]);
	}
	return 0;
}
```

# 学生信息管理系统
```C
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#define Header printf("|学号         |姓名     |年龄     |性别     |出生年月     |地址                           |电话         |E-mail\n")
#define Print printf("|%-12d |%-8s |%-8d |%-8s |%-12s |%-30s |%-12s |%-8s\n",stu[p].StuNum,stu[p].StuName,stu[p].StuAge,stu[p].StuSex,stu[p].StuBirth,stu[p].StuAddress,stu[p].StuTel,stu[p].StuEmail) 
struct StuInf
{
	int StuNum;
	char StuName[13];
	int StuAge;
	char StuSex[4];
	char StuBirth[12];
	char StuAddress[80];
	char StuTel[16];
	char StuEmail[20];
}stu[100];
int Saveflag=0;
void Menu()
{
	printf("***************学生信息管理系统****************\n");
	printf("		   主菜单                              \n");
	printf("	1录入学生信息	2查询学生信息		       \n");
	printf("	3浏览学生信息	4删除学生信息              \n");
	printf("	5修改学生信息	6保存学生信息              \n");
	printf("		  0退出系统                            \n");
	printf("***********************************************\n");
}

int OpenFile(int cnt)
{
	FILE *fp;
	int i=0;
	fp=fopen("C:\\StuSys\\Student.dat","ab+");
	if(fp==NULL)
	{
		printf("无法打开文件!");
		exit(0);
	}
	while(!feof(fp))
	{
		if(fread(&stu[i],sizeof(struct StuInf),1,fp)==1) 
		{
			cnt++;
			i++;
		}
	}
	fclose(fp);
	return cnt;
}//打开文件 
int Add(int cnt)
{
	int choice,i,j,recordcnt,StuNumTemp;
	recordcnt=cnt;
	printf("开始录入学生信息\n");
	for (i=cnt;i<100;i++)
	{
		printf("学生学号：");
		scanf("%d",&StuNumTemp);
		for (j=0;j<i;j++)
		{
			if (stu[i].StuNum==StuNumTemp)
			{
				printf("输入学号重复，请重新输入\n");
				printf("学生学号:");
				scanf("%d", &StuNumTemp);
				j=-1;
			}
		}
		stu[i].StuNum=StuNumTemp;
		printf("姓名：");
		scanf("%s", &stu[i].StuName);
		printf("年龄：");
		scanf("%d", &stu[i].StuAge);
		printf("性别：");
		scanf("%s", &stu[i].StuSex);
		printf("出生年月（格式：xxxx.xx.xx）：");
		scanf("%s", &stu[i].StuBirth);
		printf("地址：");
		scanf("%s", &stu[i].StuAddress);
		printf("电话：");
		scanf("%s", &stu[i].StuTel);
		printf("E-mail：");
		scanf("%s", &stu[i].StuEmail);
		printf("是否继续输入？1 继续 0 退出：");
		scanf("%d", &choice);
		recordcnt++;
		if (choice != 1)
			break;
	}
	Saveflag = 1;
	printf("记录输入完成，按任意键返回主菜单...");
	getchar();
	getchar();
	return recordcnt;
}//写入学生数据 
int Locate(int num,int cnt)
{
	int p=-1,i;
	for(i=0;i<cnt;i++)
	{
		if(stu[i].StuNum==num)
		{
			p=i;
			break;
		}
	}
	return p;
}//定位学生数据 
void Query(int cnt)
{
	int p,count=0,i,tempnum,choice;
	char tempname[13];
	printf("开始查询学生信息...\n");
	printf("请选择查询方式 (1 按学号 2 按姓名)：");
	scanf("%d",&choice);
	switch(choice)
	{
	case 1: 
		printf("请输入要查询学生的学号：");
		scanf("%d",&tempnum);
		p=Locate(tempnum,cnt);
		if(p==-1)
		{
			printf("输入的学号错误，请重新输入...");
		}
		else
		{
			printf("查询的信息如下：\n");
			Header;
			Print;
			printf("已输出查询到的学生，按任意键返回主菜单...");
		}
		getchar();
		break;
	case 2:
		getchar();
		printf("请输入要查询的学生姓名：");
		gets(tempname);
		for(i=0;i<cnt;i++)
		{
			if(strcmp(tempname,stu[i].StuName)==0)
			{
				if(count==0)
				{
					Header;
				}
				p=i;
				Print;
				count++;
			}
		}
		if(count==0)
		{
			printf("\n查询学生信息不存在，按任意键返回主菜单..."); 
		}
		else
		{
			printf("\n学生信息查询完成，按任意键返回主菜单..."); 
		}
		break;
	default:
		printf("选择错误，按任意键返回主菜单...");
	}
	getchar();
}//查询学生数据 
void ShowRecord(int cnt)
{
	int p,i,j;
	struct StuInf temp;
	if(cnt!=0)
	{
		for(i=0;i<cnt-1;i++)
		{
			for(j=0;j<cnt-i-1;j++)
			{
				if(stu[j].StuNum>stu[j+1].StuNum)
				{
					temp=stu[j];
					stu[j]=stu[j+1];
					stu[j+1]=temp;
				}
			}
		}
		//按学号对各个学生进行排序处理，方便在浏览的便于统计信息 
		Header;
		for(i=0;i<cnt;i++)
		{
			p=i;
			Print;
		}
	}
}//浏览学生数据 
int Del(int cnt)
{
	int p,i,tempnum;
	printf("开始删除学生信息...\n");
	printf("请输入要删除的学生学号：");
	scanf("%d",&tempnum);
	p=Locate(tempnum,cnt);
	if(p==-1)
	{
		printf("没有找到要删除的学生信息，按任意键返回主菜单..."); 
	} 
	else
	{
		printf("要删除的学生信息如下：\n");
		Header;
		Print;
		printf("请确认是否进行删除（1 确认 0 取消）：");
		scanf("%d",&i); 
		while(i==1)
		{
			for(i=p;i<cnt-1;i++) 
			{
				stu[i]=stu[i+1];
			}
			cnt--;
			Saveflag=1;
			i=-1;
			printf("\n学生信息删除完成，按任意键返回主菜单..."); 
		}
	}
	getchar();
	getchar();
	return cnt;
}//删除学生数据 
void Modify(int cnt)
{
	int p,j,StuNumTemp,tempnum,choice=0,c=1;
	printf("请输入要修改学生的学号：");
	scanf("%d",&tempnum);
	p=Locate(tempnum,cnt);
	if(p==-1)
	{
		printf("信息错误，按任意键返回主菜单..."); 
	}
	else
	{
		Header;
		Print;
		printf("\n请重新输入学生信息");
		while(c)
		{
			printf("\n请输入对应编号的选项\n");
			printf("1-学生学号 2-姓名 3-年龄 4-性别 5-出生年月 6-地址 7-电话 8-E-mail 0-退出修改\n"); 
			printf("请选择要执行的操作：");
			scanf("%d",&choice);
			switch(choice)
			{
				case 1:
					printf("学生学号：");
					scanf("%d",&StuNumTemp);
					break;
				case 2: 
					printf("姓名：");
					scanf("%s", &stu[p].StuName);
					break;
				case 3:
					printf("年龄：");
					scanf("%d", &stu[p].StuAge);
					break;
				case 4:
					printf("性别：");
					scanf("%s", &stu[p].StuSex);
					break;
				case 5:
					printf("出生年月（格式：xxxx.xx.xx）：");
					scanf("%s", &stu[p].StuBirth);
					break;
				case 6:
					printf("地址：");
					scanf("%s", &stu[p].StuAddress);
					break;
				case 7:
					printf("电话：");
					scanf("%s", &stu[p].StuTel);
					break;
				case 8:
					printf("E-mail：");
					scanf("%s", &stu[p].StuEmail);
					break;
				case 0:
					c=0;
					break;
				default:
					printf("选择错误，按任意键重新继续修改");
					getchar();
					getchar(); 
					break;
			}
		}
		Saveflag=1;
		printf("信息修改完成，任意键退出修改");
	}
	getchar();
	getchar();
}//修改学生数据 
void SaveFile(int cnt)
{
	FILE *fp;
	int i=0;
	if(Saveflag==1)
	{
		fp=fopen("C:\\StuSys\\Student.dat","wb");
		for(;i<cnt;i++)
			fwrite(&stu[i],sizeof(struct StuInf),1,fp);
		fclose(fp);
		Saveflag=0;
	}
}//存盘 
void ExitSystem(int cnt)
{
	int choice=0;
	if(Saveflag==1)
	{
		printf("信息已发生改变，是否保存？（1 保存退出 2 不保存退出）：");
		scanf("%d",&choice);
		if(choice==1)
		{
			SaveFile(cnt);
			printf("文件写入完成，按任意键退出..."); 
		} 
	}
	else
	{
		printf("按任意键退出..."); 
	}
	getchar();
	getchar();
	exit(0);
}//退出系统 
int main()
{
	int choice=0,count=0;
	count=OpenFile(count);
	while(1)
	{
		system("cls");
		Menu();
		printf("请输入你的选择：");
		scanf("%d",&choice);
		switch(choice)
		{
		case 1:
			count=Add(count);
			break;
		case 2:
			Query(count);
			break;
		case 3:
			if (count == 0)
				printf("当前没有学生信息，按任意键返回主菜单...");
			else
			{
				printf("开始显示当前已存储的学生信息...\n");
				printf("学生信息如下...\n");
				ShowRecord(count);
				printf("已显示当前学生信息，按任意键返回主菜单...");
				getchar();
				getchar();
			}
			break;
		case 4:
			Del(count);
			break;
		case 5:
			Modify(count);
			break;
		case 6:
			SaveFile(count);
			printf("保存文件完成，按任意键返回主菜单...");
			getchar();
			getchar();
			break;
		case 0:
			ExitSystem(count);
		default:
			printf("选择错误，请重新输入...");
			getchar();
			getchar();
		}
	}
}

```
---