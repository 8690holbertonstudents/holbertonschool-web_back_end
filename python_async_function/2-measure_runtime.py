#!/usr/bin/env python3
"""
Module to use Python - Async
"""
import asyncio
import time
wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """
    Function to measure the total execution time for wait_n(n, max_delay)
    Args:
        n (int): Number of times to call wait_random
        max_delay (int): Max delay
    Returns:
        float: Total execution time divided by n
    """
    start_time = time.time()
    asyncio.run(wait_n(n, max_delay))
    end_time = time.time()
    total_time = end_time - start_time
    return total_time / n
