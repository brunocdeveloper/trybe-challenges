import json
import pytest

from learning_tests.open_file import retrieve_stock_from_json
from unittest.mock import mock_open, patch
from tests.test_generate_simple_report import stock

def test_when_extension_was_incorrect_raises_an_exception():
    with pytest.raises(ValueError, match="Formato inválido"):
       retrieve_stock_from_json("qualquercoisa")

def test_when_sucessful_it_must_return_stock_of_products(stock):
    with patch("builtins.open", mock_open(read_data=json.dumps(stock))):
        given = retrieve_stock_from_json("seila.json")
        assert given == stock
