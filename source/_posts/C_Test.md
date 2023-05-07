---
title: C练习题
date: 2022-10-27 22:50:00
description: practice
categories:
- program
tags: 
- practice
---

# 题目一

* 题目描述  
    幼稚园终于又有新的作业了。 老师安排同学用发给同学的4根木棒拼接成一个三角形。 当然按照正常的逻辑，如果不能拼接成三角形。 必然要折断某个木棍来拼接三角形。 可是懒惰的小艺当然不会费力了！ 如果拼接不成三角形小艺就会把它凭借成类似边长 1 1 2的伪三角形。 如果伪三角形都拼接不成那就不交作业！
---
* 输入描述  
    输入四根木棍的长度。
---
* 输出描述  
    拼接成正常三角形输出”1”,伪三角形输出”0”,否则输出”-1”。
---
* 实例代码  
```c
#include <stdio.h>
int main() {

    int m,n,p,q;
    scanf("%d%d%d%d", &m,&n,&p,&q);
    if(m>0,n>0,q>0,q>0)
	{
		if(m+n>p&&m+p>n&&n+p>m)
	        printf("1");
	    else if(m+p>q&&m+q>p&&p+q>m)
	        printf("1");
	    else if(m+n>q&&m+q>n&&q+n>m)
	        printf("1");
	    else if(n+p>q&&p+q>n&&n+q>p)
	        printf("1");
	    else if(m+n==p||m+p==n||n+p==m)
	        printf("0");
	    else if(m+p==q||m+q==p||p+q==m)
	        printf("0");
	    else if(m+q==n||m+n==q||n+q==m)
	        printf("0");
	    else if(n+p==q||p+q==n||n+q==p)
	        printf("0");
	    else
	        printf("-1");
	}
    return 0;
}
```

# 题目二

* 题目描述 
	陶陶家的院子里有一棵苹果树，每到秋天树上就会结出 10 个苹果。苹果成熟的时候，陶陶就会跑去摘苹果。陶陶有个 30 厘米高的板凳，当她不能直接用手摘到苹果的时候，就会踩到板凳上再试试。 现在已知 10 个苹果到地面的高度，以及陶陶把手伸直的时候能够达到的最大高度，请帮陶陶算一下她能够摘到的苹果的数目。假设她碰到苹果，苹果就会掉下来。
---
* 输入描述 
	输入包括两行数据。第一行包含 10 个 100 到 200 之间（包括 100 和 200 ）的整数（以厘米为单位）分别表示 10 个苹果到地面的高度，两个相邻的整数之间用一个空格隔开。第二行只包括一个 100 到 120 之间（包含 100 和 120 ）的整数（以厘米为单位），表示陶陶把手伸直的时候能够达到的最大高度。
---
* 输出描述 
	输出包括一行，这一行只包含一个整数，表示陶陶能够摘到的苹果的数目。

---
* 实例代码 
```c
#include <stdio.h>
#define NUM 10
int main()
{
    int i,j,k[NUM],n=0;
    for(i=0;i<=9;i++)
        scanf("%d",&k[i]);
    scanf("%d",&j);
    for(i=0;i<=9;i++)
    {
        if(k[i]<=j+30)
        	n++;
    }
    printf("%d",n);
    return 0;
}
```

# 题目三

* 题目描述 
	给一个无序数组，求最长递增的区间长度。如：[5,2,3,8,1,9] 最长区间 2,3,8 长度为 3 （注意：测试用例仅做参考，我们会根据代码质量进行评分）
---
* 输入描述 
	第一行输入整数n。(1<=n<=10000)表示数组的大小 第二行给出n个整数a.(-1e9<=a<=1e9)
---
* 输出描述 
	Nan

---
* 实例代码 
```c
#include <stdio.h>
#include <stdlib.h>
#define NUM 10000

int solution(int n, int arr[]) {
    int result;

    int i, j = 1, k[NUM], m = 0;
    for (i = 0; i <= n; i++)
    {
        if (arr[i] < arr[i + 1])
            j++;
        else
        {
            k[i] = j;
            j = 1;
        }
        if (k[i] >= m)
            m = k[i];

    }
    result = m;
    return result;
}


int main() {

    int n;
    scanf("%d", &n);


    int* arr;
    arr = (int*)malloc(n * sizeof(int));

    for (int i = 0; i < n; i++)
    {
        scanf("%d", &arr[i]);
    }

    int result = solution(n, arr);

    printf("%d", result);

    return 0;
}
```
# 题目四

* 题目描述 
	已知n个整数。 每3个数算一个周期。 不足一个周期补0. 在周期的第一个位置的数的权值和等于a1+a[1+3]+… … 求三个数的最大权值。 如果最大权值为第一个数，输出’J’； 最大权值为第二个数，输出’H’； 最大权值为第三个数，输出’B’。
---
* 输入描述 
	第一行输入一个整数n。(1<=n<=100) 第二行输入n个整数。
---
* 输出描述 
	输出答案。

---
* 实例代码 
```c
#include <stdio.h>
#include <stdlib.h>

void solution(int n, int arr[]) {

    int i = 0, k = n, q = 0, j[3] = { 0 };
    if (k % 3 != 0)
    {
        do
        {
            j[0] += arr[q];
            i++;
            q += 3;
        } while (i < k / 3 + 1);
    }
    else
    {
        do
        {
            j[0] += arr[q];
            i++;
            q += 3;
        } while (i < k / 3);
    }
    i=0,q = 0;
    if (k >= 2)
    {
        do
        {
            j[1] += arr[q + 1];
            i++;
            q += 3;
        } while ((i + 1) < k / 3 + 1);
    }
    i=0,q = 0;
    if (k >= 3)
    {
        do
        {
            j[2] += arr[q + 2];
            i++;
            q += 3;
        }while ((i + 2) < k / 3 + 2);
    }
    if (j[0] > j[1] && j[0] > j[2])
        printf("J");
    else if (j[1] > j[2] && j[1] > j[0])
        printf("H");
    else if (j[2] > j[0] && j[2] > j[1])
        printf("B");

}

int main() {

    int n;
    scanf("%d", &n);
    int* arr;

    arr = (int*)malloc(n * sizeof(int));

    for (int i = 0; i < n; i++)
    {
        scanf("%d", &arr[i]);
    }

    solution(n, arr);

    return 0;
}
```

# 题目五

* 题目描述 
	书是人类进步的阶梯。 小艺每周因为工作的原因会选择性的每天多读几页或者少读几页。 小艺想知道一本n页的书她会在周几读完。
---
* 输入描述 
	第一行输入n(1<=n<=1000)； 第二行输入7个整数，分别表示周一~周日的读书页数p(0<=p<=1000)。（不考虑7个整数都为0的情况）
---
* 输出描述 
	输出答案。（1-7）

---
* 实例代码
```c
#include <stdio.h>
#include <stdlib.h>

void solution(int n, int pages[7])
{ 
    int i,a,c=0,sum=0,x=0;
    for(i=0;i<7;i++)
    {
        x+=pages[i];
    }
    a=n%x;
    if(a==0)
    {
    	for(i=0;i<7;i++)
    	{
			if(pages[i])
			{
				x-=pages[i];
			}
			else
			{
				continue;
			}
			if(x<=0)
			{
				c=i+1;
			}
		}
	}	
	else
	{
		for(i=0;i<7;i++)
		{
			if(a>0)
			{
				a-=pages[i];
			}
			else
			{
				c=i;
				break;
			}
		}
	}
    printf("%d",c);
}
int main() {
    int n;
    scanf("%d", &n);
    int pages[7];
    int i;
    for (i = 0; i < 7; i++)
    {
        scanf("%d", &pages[i]);
    }
	solution(n, pages);
    return 0;
}
```