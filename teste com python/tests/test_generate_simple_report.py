import pytest
from learning_tests.generate_simple_report import generate_simple_report

@pytest.fixture
def stock():
    return [
      {
        "data de fabricação antiga: 2019-09-13"
      },
      {
        "data de fabricação proxima: 2019-09-14"
      }
    ]

def test_report_must_contain_older_manufacturing_date(stock):
    report = generate_simple_report(stock)
    assert "data de fabricação antiga: 2019-09-13" in report

def test_report_must_contain_closest_expiration_date(stock):
    report = generate_simple_report(stock)
    assert "data de fabricação proxima: 2019-09-14" in report