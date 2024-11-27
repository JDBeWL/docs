 msg='来自wisdom的自动部署于'$(date "+%Y-%m-%d %H:%M:%S")
git add -A
git commit -m "${msg}"
git push 



echo  "已经成功提交到gitlab"