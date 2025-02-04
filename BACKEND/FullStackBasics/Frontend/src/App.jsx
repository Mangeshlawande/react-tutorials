import { useState } from 'react'

import './App.css'
import axios from 'axios';
import {useEffect } from 'react'



function App() {
  
  const [jokes, setJokes ]= useState([]);
  

// 'http://localhost:3000/jokes'

  useEffect(() => {

    axios.get('/api/jokes')
    .then((response) => {
      setJokes(response.data)
    })

    .catch((error) => {
      console.log(error)
    })

  })

  return (
    <>
      <h1> Chai Aur Full Stack Devlopement  | YouTube </h1>
      <h2>JOKES: - {jokes.length}</h2>

      {
        jokes.map((item, index) => (
          <div key={item.id} >
            <h3> title- { item.title } </h3>
          <p>description - { item.content } </p>
          </div>
        ))
      }
    </>
  )
}

export default App





// axios for writing  web-request
/**how to apply proxy's:
 * 
 * 
 * 
 */

/**
 * #include <bits/stdc++.h>
using namespace std;

struct Node{
    int data;
    Node* left;
    Node* right;
};

Node* newNode(int val){
    Node* temp = new Node;
    temp->data = val;
    temp->left = NULL;
    temp->right = NULL;
    return temp;
}

class Solution {
public:
    bool isSubTree(Node* S, Node* T) {
        //Write code here
        
    }
};

Node* buildTree(string str){
    if(str.length() == 0 || str[0] == 'N')
        return NULL;
    vector<string> ip;
    istringstream iss(str);
    for(string str; iss >> str; )
        ip.push_back(str);
    Node* root = newNode(stoi(ip[0]));
    queue<Node*> queue;
    queue.push(root);
    int i = 1;
    while(!queue.empty() && i < ip.size()) {
        Node* currNode = queue.front();
        queue.pop();
        string currVal = ip[i];
        if(currVal != "N") {
            currNode->left = newNode(stoi(currVal));
            queue.push(currNode->left);
        }
        i++;
        if(i >= ip.size())
            break;
        currVal = ip[i];
        if(currVal != "N") {
            currNode->right = newNode(stoi(currVal));
            queue.push(currNode->right);
        }
        i++;
    }
    return root;
}

int main() {
    int t;
    string  tc;
    getline(cin,tc);
    t=stoi(tc);
    while(t--)
    {
        string s1;
        getline(cin,s1);
        string s2;
        getline(cin,s2);
        Node* root1 = buildTree(s1);
        Node* root2 = buildTree(s2);

        Solution ob;
        if (ob.isSubTree(root1,root2)){
            cout<<"true"<<endl;
        }else{
            cout<<"false"<<endl;
        }
    }
    return 0;
}
 */