#include <iostream>
using namespace std;

int func1(int a, int b, int m) {
  int val = 1;
  while(b--) val *= a;
  return val % m;
}


int main(void)
{
  // func1()
  cout << "HELLO\n";
  return 0;
}
