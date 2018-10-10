#Author: Raghu
@PrimusBankFeature 
Feature: Primus Bank Features 

#@CreateBranchTC1 
#Scenario: Create a Branch 
#	Given Admin logs in to Primus Bank Application 
#	When Click on Branches button 
#	And Click on New Branch button 
#	Then Enter Branch details 
#	Then Click on Submit button 
#	Then Close The Browser 

@CreateBranchTC2 
Scenario Outline: Create a Branch with Data 
	Given Admin logs in to Primus Bank Application 
	When Click on Branches button 
	And Click on New Branch button 
	Then Enter Branch Details as "<branchName>" and "<add1>" and <add2> and <area> and <zipocde> and <country> and <state> and <city> 
	Then Click on Submit button 
	Then Close The Browser 
	
	Examples: 
		|branchName|add1|add2|area|zipocde|country|state|city|
		|testICICI|Bharat|srnagar|arealocal|54321|INDIA|GOA|GOA|
	 