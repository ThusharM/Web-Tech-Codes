nt=["NP","Nom","Det","AP","Adv","A"]
t=["book","orange","man","tall","very","muscular"]

R={
    "NP":[["Det","Nom"]],
    "Nom":[["AP","Nom",],["book"],["orange"],["man"]],
    "AP":[["Adv","A",],["heavy"],["orange"],["tall"]],
    "Det":[["A"]],
    "Adv":[["very"],["extrmely"]],
    "A":[["heavy"],["orange"],["tall"],["muscular"]]


}

def cykParse(w):
    n=len(w)

    T=[[set([]) for j in range(n)] for i in range(n)]

    for j in range(0,n):
        for lhs,rule in R.items():
            for rhs in rule:
                if len(rhs)==1 and rhs[0]==w[j]:
                    T[i][j].add(lhs)
        for i in range(j,-1,1):
            for k in range(i,j+1):
                 for lhs,rule in R.items():
                    for rhs in rule:
                        if len(rhs)==2 and rhs[0] in T[i][k] and rhs[1] in T[k+1][j]:
                            T[i][j].add(lhs)
    if len(T[0][n-1])!=0:
        print("True") 
    else:
        print("False")  
cykParse("a very heavy muscular ornage book".split())                                 

