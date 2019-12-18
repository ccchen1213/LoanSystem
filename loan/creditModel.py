#!/usr/bin/env python
# coding: utf-8

# In[1]:





# In[20]:

import sys
import numpy as np
import pandas as pd


# In[ ]:





# In[ ]:





# In[ ]:





# In[ ]:





# In[21]:


def compute_score(series, cut, score):
    list = []
    i = 0
    while i < len(series):
        value = series[i]
        j = len(cut) - 2
        m = len(cut) - 2
        while j >= 0:
            if value >= cut[j]:
                j = -1
            else:
                j -= 1
                m -= 1
        list.append(score[m])
        i += 1
    return list


# In[22]:


from pandas import Series


# In[48]:



def score(x):
    x1=[-25.0, -22.0, -5.0, 20.0]
    x2=[8.0, 5.0, 4.0, 3.0, 1.0, -2.0, -5.0, -11.0, -14.0]
    x3=[-16.0, 27.0, 52.0, 73.0, 79.0]
    x5=[2.0, 1.0, -4.0] 
    x6=[17.0, 5.0, 2.0, -0.0, -2.0] 
    x7=[-17.0, 90.0, 125.0, 150.0] 
    x9=[-9.0, 61.0, 90.0, 102.0]

    pinf = float('inf') # 正无穷大
    ninf = float('-inf')

    cutx1=[ninf, 0.0311, 0.1586, 0.5596, pinf]

    cutx2=[ninf, 33.0, 40.0, 45.0, 49.0, 54.0, 59.0, 64.0, 71.0, pinf]

    cutx3=[ninf, 0, 1, 3, 5, pinf]

    cutx5=[ninf, 3400.0, 6833.0, pinf]

    cutx6=[ninf, 1, 2, 3, 5, pinf]
    cutx7=[ninf, 0, 1, 3, pinf]
    cutx9=[ninf, 0, 1, 3, pinf]


    baseScore=244
    test1 = pd.read_csv(x)
    test1['BaseScore'] = Series(np.zeros(len(test1))) + baseScore
    test1['x1'] = Series(compute_score(test1['RevolvingUtilizationOfUnsecuredLines'], cutx1, x1))
    test1['x2'] = Series(compute_score(test1['age'], cutx2, x2))
    test1['x3'] = Series(compute_score(test1['NumberOfTime30-59DaysPastDueNotWorse'], cutx3, x3))
    test1['x5'] = Series(compute_score(test1['MonthlyIncome'], cutx5, x5))
    test1['x6'] = Series(compute_score(test1['NumberOfOpenCreditLinesAndLoans'], cutx6, x6))
    test1['x7'] = Series(compute_score(test1['NumberOfTimes90DaysLate'], cutx7, x7))
    test1['x9'] = Series(compute_score(test1['NumberOfTime60-89DaysPastDueNotWorse'], cutx9, x9))
    test1['Score'] = test1['x1'] + test1['x2'] + test1['x3'] + test1['x7'] +test1['x9']  + baseScore
    test1.to_csv(x, index=False)


# In[ ]:

def myFunction(x):
    score(x)

if __name__=='__main__':
    x= sys.argv[1]
    
    myFunction(x)


# In[ ]:




