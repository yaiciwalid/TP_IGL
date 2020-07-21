from selenium import webdriver

driver = webdriver.Firefox()
driver.get("http://127.0.0.1:9000/etudiant/")
driver.close()


driver = webdriver.Firefox()
driver.get("http://127.0.0.1:9000/group/1CS7")
driver.close


driver = webdriver.Firefox()
driver.get("http://127.0.0.1:9000/group_list/")
driver.close()




