import unittest

class Test1(unittest.TestCase):
    def setUp(self):
        print 'some text'
    
    def test_search_in_python_org(self):
        print 'some text'
    
    def tearDown(self):
        print 'some text'

if __name__=="__main__":
    unittest.main()