## Command

### 파일 및 크기 확인
```sh
find /Users/nogada/workspace/zmp/zcp-console-web -type f -exec du -h {} + | awk '{print $2 "\t" $1}' > file.csv

find . -type f -not -path '*/\.git/*' -exec sh -c 'echo -n "{}\t"; git log -1 --format="%ad" -- "{}"' \;



find . -type f -not -path './.git/*' -print0 | while IFS= read -r -d '' file; do
    echo -n "$file\t" # 파일 경로 출력
    echo -n "$(git log -1 --format="%ad" --date=format:"%Y-%m-%d %H:%M:%S" -- "$file")\t" # 마지막 Git 수정 날짜 출력
    echo "$(stat -f "%z" "$file")" # 파일 크기 출력
done > /Users/nogada/workspace/nogada/mfe/mfe-architecture/doc/ref/code.csv


```


=MID(B2, 9, 2) & "-" & MID(B2, 1, 3) & "-" & MID(B2, 5, 4) + TIMEVALUE(MID(B2, 14, 8)
