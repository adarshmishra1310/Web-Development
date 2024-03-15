#include <stdio.h>
#include <string.h>
#include <ctype.h>

#define MAX_WORDS 100
#define MAX_WORD_LENGTH 50

int main()
{
    int n, flag = 1;
    scanf("%d", &n);
    char str[MAX_WORDS][MAX_WORD_LENGTH];
    for (int i = 0; i < n; i++)
    {
        scanf("%s", str[i]);
    }
    for (int i = 0; i < n; i++)
    {
        for (int k = i + 1; k < n; k++) 
        {
            for (int j = 0; j < strlen(str[i]); j++)
            {
                flag = 0;
                if(strlen(str[i]) != strlen(str[k]))
                {
                    flag = 0;
                    break;
                }
                for (int l = 0; l < strlen(str[k]); l++)
                {
                    if (str[i][j] == str[k][l])
                    {
                        flag = 1;
                    }
                }
                if (flag == 0)
                {
                    break;
                }
            }
            if(flag == 1)
            {
                printf("%s and %s\n", str[i], str[k]);
            }
        }
    }
}