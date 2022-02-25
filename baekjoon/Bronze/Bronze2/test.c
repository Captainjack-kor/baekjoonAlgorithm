#include <stdio.h>
int main()
{
	int N, i,min;
	scanf("%d", &N);
	int A[100000];
	for (i = 0; i < N; i++)
		scanf("%d", &A[i]);
	min = abs(A[1] - A[0]);
	for (i = 0; i < N - 1; i++)
	{
		if (abs(A[i + 1] - A[i]) <= min)
			min =abs(A[i + 1] - A[i]);
	}
	printf("%d",min);
	return 0;
}