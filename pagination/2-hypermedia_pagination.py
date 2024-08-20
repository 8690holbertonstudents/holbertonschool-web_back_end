#!/usr/bin/env python3
"""
Python module to use pagination
"""
import csv
import math
from typing import List


def index_range(page: int, page_size: int) -> tuple:
    """
    Function to paginate a dataset with simple page and page_size parameters
    Args:
        page (int): The page number.
        page_size (int): The size of page.
    Returns:
        tuple: A tuple containing the start index
        and end index for the requested page.
    """
    start_index = (page - 1) * page_size
    end_index = start_index + page_size
    return (start_index, end_index)


class Server:
    """
    Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        Function to simple paginate a dataset
        """
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0

        dataset = self.dataset()
        start_index, end_index = index_range(page, page_size)
        return dataset[start_index:end_index]

    def get_hyper(self, page: int = 1, page_size: int = 10):
        """
        Function to use hypermedia metadata to paginate a dataset
        """
        dataset = self.dataset()
        total_pages = math.ceil(len(dataset) / page_size)
        page_data = self.get_page(page, page_size)

        hypermedia = {
            "page_size": page_size,
            "page": page,
            "data": page_data,
            "next_page": page + 1 if page < total_pages else None,
            "prev_page": page - 1 if page > 1 else None,
            "total_pages": total_pages
        }

        return hypermedia
